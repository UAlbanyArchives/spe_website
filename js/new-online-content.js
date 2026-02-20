(function () {

  // Make a GET request to the JSON API
  fetch('https://archives.albany.edu/static/new_online_content.json')
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
      if (data) {
        // Remove the <div class="placeholders"> element
        const placeholdersDiv = document.querySelector('.placeholders');
        if (placeholdersDiv) {
          placeholdersDiv.parentNode.removeChild(placeholdersDiv);
        }

        // Create Bootstrap cards for each result
        Promise.all(data.map(obj => createCardHTML(obj)))
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

    // Declare seriesSection outside of the if statement
    let seriesSection = '';

    // Check for series
    if (Array.isArray(result.parent_ids) && result.parent_ids.length > 1) {
      const seriesNames = result.parents;

      // Skip the first item
      const trimmedIds = result.parent_ids.slice(1);
      const trimmedNames = seriesNames.slice(1);

      seriesSection = `<strong>Series:</strong> ${
        trimmedIds.map((id, index) =>
          `<a href="https://archives.albany.edu/description/catalog/${result.collection_id}${id}">${trimmedNames[index]}</a>`
        ).join(', ')
      }<br />`;
    }

    let collectionText = result.collection;
    let lastCommaIndex = collectionText.lastIndexOf(',');

    if (lastCommaIndex !== -1) {
      collectionText = collectionText.substring(0, lastCommaIndex);
    }

    let escapedCollection = result.collection_id.replace(/\./g, '-');
    return `
      <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title">
                  <a href="https://archives.albany.edu/description/catalog/${result.id}"
                    class="truncate-title"
                    title="${result.title}">
                    ${result.title}
                  </a>
                </h4>
                <p class="card-text"><a href="https://archives.albany.edu/description/catalog/${escapedCollection}">${collectionText}</a></p>
                <p class="card-text">
                  <strong>Date:</strong> ${result.date}<br />
                  <strong>Type:</strong> ${result.type}<br />
                  ${seriesSection}
                  <strong>Added:</strong> ${result.added}
                </p>
                <p class="card-text"><span class="text-muted"><a href="https://archives.albany.edu/description/repositories/${result.collecting_area_code}">${result.collecting_area}</a></span></p>
              </div>
            </div>
            <div class="col-md-4 d-flex align-items-center justify-content-center">
              <img class="card-img" src="${result.thumbnail}" alt="${result.title}">
            </div>
          </div>
      </div>
    `;
  }
})();
