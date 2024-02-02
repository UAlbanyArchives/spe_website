(function () {
  function formatDate(inputDate) {
    const dateObject = new Date(inputDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
    return formattedDate;
  }

  // Make a GET request to the JSON API
  fetch('https://archives.albany.edu/catalog?per_page=500&format=json&search_field=all_fields')
    .then(response => {
      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Parse the JSON response
      return response.json();
    })
    .then(data => {
      // Check if 'data' key exists
      if (data && data.data) {
        const uniqueValuesArray = [];
        const filteredObjects = [];

        for (const obj of data.data) {
          // Extracting values from the changed API response
          const collectionNumbersHTML = obj.attributes.collection_number_tesim.attributes.value;

          // collectionNumbersHTML is a single HTML element, so get the text inside
          const tempElement = document.createElement('div');
          tempElement.innerHTML = collectionNumbersHTML;
          const collectionNumbers = tempElement.textContent || tempElement.innerText;

          // Check if collectionNumbers is defined
          if (collectionNumbers) {
            // Check if any value within the array is unique
            const isUnique = collectionNumbers.split(',').some(number => !uniqueValuesArray.includes(number));

            if (isUnique) {
              // Add the object to the result
              filteredObjects.push(obj);
              // Add all values from the array to track uniqueness
              uniqueValuesArray.push(...collectionNumbers);
            }

            // Break once we have the first three unique values
            if (filteredObjects.length === 3) {
              break;
            }
          }
        }

        // Remove the <div class="placeholders"> element
        const placeholdersDiv = document.querySelector('.placeholders');
        if (placeholdersDiv) {
          placeholdersDiv.parentNode.removeChild(placeholdersDiv);
        }

        // Create Bootstrap cards for each result
        Promise.all(filteredObjects.map(obj => createCardHTML(obj)))
          .then(cardsHTML => {
            // Append cards to the HTML div with the class '.results'
            const resultsContainer = document.querySelector('.results');
            resultsContainer.innerHTML = cardsHTML.join('');
          })
          .catch(error => {
            console.error('Error creating cards:', error);
          });
      } else {
        console.error('Invalid JSON format: Missing keys');
      }
    })
    .catch(error => {
      // Log any errors to the console
      console.error('Fetch error:', error);
    });

  // Function to create Bootstrap card HTML for a given result
  async function createCardHTML(result) {
    const resourceModel = result.type.toLowerCase();

    // Extracting values from the changed API response
    const title = getTextContent(result.attributes.title);
    const collectionNumber = getTextContent(result.attributes.collection_number_tesim.attributes.value);
    const collection = getTextContent(result.attributes.collection_tesim.attributes.value);
    const dateCreated = getTextContent(result.attributes.date_created_tesim.attributes.value);
    const resourceType = getTextContent(result.attributes.resource_type_tesim.attributes.value);
    const systemModifiedDate = result.attributes.system_modified_dtsi.attributes.value;
    const collectingArea = getTextContent(result.attributes.collecting_area_tesim.attributes.value);
    const thumbnailPath = result.attributes.thumbnail_path_ss.attributes.value;

    // Function to fetch data for a given ID and collection number
    async function fetchDataForId(id, collection_number) {
      const url = `https://archives.albany.edu/description/catalog/${collection_number}aspace_${getTextContent(id)}.json`;
      //console.log(url);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return getTextContent(data.data.attributes.normalized_title_ssm.attributes.value);
      } catch (error) {
        console.error(`Fetch error for ID ${id}:`, error);
        return null;
      }
    }

    // Function to fetch data for each ID in result.record_parent_tesim
    async function fetchSeriesNames(ids, collection_number) {
      if (!ids) {
        return null;
      }

      const idArray = Array.isArray(ids) ? ids : [ids];

      const seriesNames = await Promise.all(idArray.map(id => fetchDataForId(id, collection_number)));
      return seriesNames.filter(name => name !== null);
    }

    // Call the function with the array of string IDs in result.record_parent_tesim
    const recordParentTesim = result.attributes.record_parent_tesim;

    // Declare seriesSection outside of the if statement
    let seriesSection = '';

    // Check if record_parent_tesim is defined
    if (recordParentTesim) {
      const seriesNames = await fetchSeriesNames(recordParentTesim.attributes.value, collectionNumber);

      // Conditionally include the <strong>Series:</strong> section with multiple links
      seriesSection = Array.isArray(recordParentTesim.attributes.value)
        ? `<strong>Series:</strong> ${
            recordParentTesim.attributes.value.map((id, index) => `<a href="https://archives.albany.edu/description/catalog/${collectionNumber}aspace_${id}">${seriesNames[index]}</a>`).join(', ')
          }<br />`
        : `<strong>Series:</strong> <a href="https://archives.albany.edu/description/catalog/${collectionNumber}aspace_${recordParentTesim.attributes.value}">${seriesNames}</a><br />`;
    }

    // Lookup for collecting_area_tesim values
    const collectingAreaLookup = {
      'New York State Modern Political Archive': 'apap',
      'National Death Penalty Archive': 'ndpa',
      'German and Jewish Intellectual Émigré Collections': 'ger',
      'Business, Literary, and Local History Manuscripts': 'mss',
      'University Archives': 'ua',
      // Add more mappings as needed
    };

    // Use the lookup or original value
    const collectingAreaAbbreviation = collectingAreaLookup[collectingArea] || collectingArea;

    return `
      <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title"><a href="https://archives.albany.edu/concern/${resourceModel}s/${result.id}">${title}</a></h5>
                <p class="card-text"><a href="https://archives.albany.edu/description/catalog/${collectionNumber}">${collection}</a></p>
                <p class="card-text">
                  <strong>Date:</strong> ${dateCreated}<br />
                  <strong>Type:</strong> ${resourceType}<br />
                  ${seriesSection}
                  <strong>Added:</strong> ${formatDate(systemModifiedDate)}
                </p>
                <p class="card-text"><span class="text-muted"><a href="https://archives.albany.edu/description/repositories/${collectingAreaAbbreviation}">${collectingArea}</a></span></p>
              </div>
            </div>
            <div class="col-md-4 d-flex align-items-center justify-content-center">
              <img class="card-img" src="https://archives.albany.edu/${thumbnailPath}" alt="thumbnail for ${title}">
            </div>
          </div>
      </div>
    `;
  }

  // Function to get text content from HTML element string
  function getTextContent(htmlString) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;
    return tempElement.textContent || tempElement.innerText;
  }
})();
