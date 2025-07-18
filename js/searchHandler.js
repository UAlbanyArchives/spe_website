window.addEventListener('load', function() {

    // URLs for Search form get request
    var allSearchURL = "https://archives.albany.edu/description/catalog?group=true";
    var historySearchURL = "https://archives.albany.edu/history";
    var mathesSearchURL = "https://archives.albany.edu/books?f[collecting_area_ssim][]=Mathes+Childrens+Literature";
    var pamphletsSearchURL = "https://archives.albany.edu/books?f[collecting_area_ssim][]=Political+Pamphlets";
    var booksSearchURL = "https://archives.albany.edu/books";

    //query selector for search form
    var searchForm = document.getElementsByClassName('search-query-form');
    var searchPlaceholder = document.getElementById('params-q');
    var currentSelection = document.getElementById('currentSelection');


    //button query selectors
    var allSearchBtn = document.getElementById('allSearch')
    var arclightBtn = document.getElementById('arclightSearch');
    var hyraxBtn = document.getElementById('hyraxSearch');
    
    var caret = document.createElement("span");
    caret.setAttribute("class", "caret");

    //
    //
    // Event Listeners - Search options change
    //
    //

    //Search all
    allSearchBtn.addEventListener('click', function($e) {
        $e.preventDefault();
        searchForm[0].action = allSearchURL;
        searchPlaceholder.placeholder = "Search everything...";
        currentSelection.textContent = "Everything ";
        currentSelection.appendChild(caret)
    });

    //Search Arclight
    arclightBtn.addEventListener('click', function($e) {
        $e.preventDefault();
        searchForm[0].action = arclightSearchURL;
        searchPlaceholder.placeholder = "Search all collection records...";
        currentSelection.textContent = "Collections ";
        currentSelection.appendChild(caret)
    });

    //Search Hyrax
    hyraxBtn.addEventListener('click', function($e) {
        $e.preventDefault();
        searchForm[0].action = hyraxSearchURL;
        searchPlaceholder.placeholder = "Search only online digital content...";
        currentSelection.textContent = "Digital Selections ";
        currentSelection.appendChild(caret)
    });


}, false);


window.addEventListener('load', function() {
    $('#toggleSearch').click( function($e) {
        $e.preventDefault();
        $('#searchSub').addClass('subnavTransition');
        $("#searchSub").toggleClass("fixedSubnav");
        $("#mainContent").toggleClass("subnavSpacer");
        if ($(window).width() < 768) {
            $('.navbar-toggle').click();
        }
        $("#params-q").focus();
    } );

    $(window).scroll(function ($e) {
        $e.preventDefault();
        var top_offset = $(window).scrollTop();
        if (top_offset < 57) {
            $e.preventDefault();
            $('#searchSub').removeClass('subnavTransition');
            $('#searchSub').removeClass('fixedSubnav');
            $('#mainContent').removeClass('subnavSpacer');
         }
    } );
});

