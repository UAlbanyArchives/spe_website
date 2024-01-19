(function() {

// Make a GET request to the JSON API
fetch('https://archives.albany.edu/catalog?page=3&per_page=500&format=json&search_field=all_fields')
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
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title"><a href="https://archives.albany.edu/concern/${resourceModel}s/${result.id}">${result.title_tesim}</a></h5>
              <p class="card-text"><a href="https://archives.albany.edu/description/catalog/${result.collection_number_tesim}">${result.collection_tesim}</a></p>
              <p class="card-text">
                <strong>Date:</strong> ${result.date_created_tesim}<br />
                <strong>Type:</strong> ${result.resource_type_tesim}<br />
                <strong>Series:</strong> <a href="https://archives.albany.edu/description/catalog/${result.collection_number_tesim}aspace_${result.record_parent_tesim}">${result.record_parent_tesim}</a><br />
              </p>
              <p class="card-text"><span class="text-muted"><a href="https://archives.albany.edu/description/repositories/${collectingAreaAbbreviation}">${result.collecting_area_tesim}</a></span></p>
            </div>
          </div>
          <div class="col-md-4 d-flex align-items-center">
            <img class="card-img" src="https://archives.albany.edu/${result.thumbnail_path_ss}" alt="thumbnail for ${result.title_tesim}">
          </div>
        </div>
    </div>
  `;
}



})();