(function () {

  function formatDate(inputDate) {
    const dateObject = new Date(inputDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
    return formattedDate;
  }

  // Make a GET request to the JSON API
  fetch('https://archives.albany.edu/catalog?per_page=1000&format=json&search_field=all_fields')
    .then(response => {
      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Parse the JSON response
      return response.json();
    })
    .then(data => {
      // Check if 'response' and 'docs' keys exist
      if (data && data.response && data.response.docs) {
        const uniqueValuesArray = [];
        const filteredObjects = [];

        for (const obj of data.response.docs) {
          const collectionNumbers = obj.collection_number_tesim;

          // Check if any value within the array is unique
          const isUnique = collectionNumbers.some(number => !uniqueValuesArray.includes(number));

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
    const resourceModel = result.has_model_ssim[0].toLowerCase();

    // Function to fetch data for a given ID and collection number
    async function fetchDataForId(id, collection_number) {
      const url = `https://archives.albany.edu/description/catalog/${collection_number}aspace_${id}.json`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.data.attributes.normalized_title_ssm.attributes.value;
      } catch (error) {
        console.error(`Fetch error for ID ${id}:`, error);
        return null;
      }
    }

    // Function to fetch data for each ID in result.record_parent_tesim
    async function fetchSeriesNames(ids, collection_number) {
      if (!ids || ids.length === 0) {
        return null;
      }

      const seriesNames = await Promise.all(ids.map(id => fetchDataForId(id, collection_number)));
      return seriesNames.filter(name => name !== null);
    }


    // Call the function with the array of string IDs in result.record_parent_tesim
    const seriesNames = await fetchSeriesNames(result.record_parent_tesim, result.collection_number_tesim);

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
    const collectingAreaAbbreviation = collectingAreaLookup[result.collecting_area_tesim] || result.collecting_area_tesim;

    // Conditionally include the <strong>Series:</strong> section with multiple links
    const seriesSection = result.record_parent_tesim && result.record_parent_tesim.length > 0
      ? `<strong>Series:</strong> ${result.record_parent_tesim.map((id, index) => `<a href="https://archives.albany.edu/description/catalog/${result.collection_number_tesim}aspace_${id}">${seriesNames[index]}</a>`).join(', ')}<br />`
      : '';




    return `
      <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title"><a href="https://archives.albany.edu/concern/${resourceModel}s/${result.id}">${result.title_tesim}</a></h5>
                <p class="card-text"><a href="https://archives.albany.edu/description/catalog/${result.collection_number_tesim}">${result.collection_tesim}</a></p>
                <p class="card-text">
                  <strong>Date:</strong> ${result.date_created_tesim}<br />
                  <strong>Type:</strong> ${result.resource_type_tesim}<br />
                  ${seriesSection}
                  <strong>Added:</strong> ${formatDate(result.system_modified_dtsi)}
                </p>
                <p class="card-text"><span class="text-muted"><a href="https://archives.albany.edu/description/repositories/${collectingAreaAbbreviation}">${result.collecting_area_tesim}</a></span></p>
              </div>
            </div>
            <div class="col-md-4 d-flex align-items-center justify-content-center">
              <img class="card-img" src="https://archives.albany.edu/${result.thumbnail_path_ss}" alt="thumbnail for ${result.title_tesim}">
            </div>
          </div>
      </div>
    `;
  }

})();
