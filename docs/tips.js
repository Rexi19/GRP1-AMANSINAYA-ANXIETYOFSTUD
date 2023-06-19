 function showPage(pageId) {
      // Hide all pages
      var pages = document.getElementsByClassName('page');
      for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
      }

      // Show the selected page
      var page = document.getElementById(pageId);
      if (page) {
        page.classList.add('active');
      }
    }

    

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const query = document.getElementById('searchInput').value; // Get the search query

  // Perform the search operation based on the query
  // Replace the following code with your actual search logic

  // Example: Redirect to another HTML page with the search query as a query parameter
  window.location.href = 'other-page.html?search=' + encodeURIComponent(query);
});
// other-page.js

// Retrieve the search query from the URL query parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchQuery = urlParams.get('search');

// Use the search query as needed
console.log('Search Query:', searchQuery);
