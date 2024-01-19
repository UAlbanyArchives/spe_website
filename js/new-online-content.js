(function() {

// Make a GET request to the JSON API
fetch('https://archives.albany.edu/catalog?locale=en&per_page=500&format=json&search_field=all_fields')
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
      const cardsHTML = filteredObjects.map(obj => createCardHTML(obj));

      // Append cards to the HTML div with the class '.results'
      const resultsContainer = document.querySelector('.results');
      resultsContainer.innerHTML = cardsHTML.join('');
    } else {
      console.error('Invalid JSON format: Missing keys');
    }
  })
  .catch(error => {
    // Log any errors to the console
    console.error('Fetch error:', error);
  });

// Function to create Bootstrap card HTML for a given result
function createCardHTML(result) {
  const resourceModel = result.has_model_ssim[0].toLowerCase();

  // Lookup for collecting_area_tesim values
  const collectingAreaLookup = {
    'New York State Modern Political Archive': 'apap',
    'National Death Penalty Archive': 'ndpa',
    // Add more mappings as needed
  };

  // Use the lookup or original value
  const collectingAreaAbbreviation = collectingAreaLookup[result.collecting_area_tesim] || result.collecting_area_tesim;

  return `
    <div class="newContent">
        <div class="contentTitle">
            <h4>
                <a href="https://archives.albany.edu/concern/${resourceModel}s/${result.id}">${result.title_tesim}</a><br />
                <small><a href="https://archives.albany.edu/description/catalog/${result.collection_number_tesim}">${result.collection_tesim}</a></small>
            </h4>
            <div class="lowerContent row">
                <div class="metadata col-xs-12 col-sm-10">
                    <p class=""><strong>Series:</strong> <a href="">${result.resource_type_tesim}</a></p>
                    <p class=""><strong>Date:</strong> ${result.date_created_tesim}</p>
                    <p class=""><strong>Type:</strong> ${result.resource_type_tesim}</p>
                    <p class=""><a href="https://archives.albany.edu/description/repositories/${collectingAreaAbbreviation}">${result.collecting_area_tesim}</a></p>
                </div>
                <div class="galleryThumb entry col-xs-12 col-sm-2">
                    <img class="galleryImage" src="https://archives.albany.edu/${result.thumbnail_path_ss}" alt="thumbnail for ${result.title_tesim}">
                </div>
            </div>
        </div>
        
    </div>
  `;
}



})();