$(function(){

	var $form = $("form.search-query-form");
	var $label = $("#searchOptions");

	$("#searchAll").click(function () {
		
		$label.text("Everything");
		$form.attr("action", "https://archives.albany.edu/search");
			
	});
	
	$("#searchArclight").click(function () {
		
		console.log($label.text());
		$label.text("Archives & Manuscripts");
		$form.attr("action", "https://archives.albany.edu/description");
			
	});

	$("#searchHyrax").click(function () {
		
		$label.text("Online Content");
		$form.attr("action", "https://archives.albany.edu/catalog");
			
	});

	$("#searchHistory").click(function () {
		
		$label.text("UAlbany History");
		$form.attr("action", "https://archives.albany.edu/history");
			
	});

	$("#searchMathes").click(function () {
		
		$label.text("Mathes Childrens Literature");
		$form.attr("action", "https://archives.albany.edu/books?f[collecting_area_ssim][]=Mathes+Childrens+Literature");
			
	});

	$("#searchPamphlets").click(function () {
		
		$label.text("Political Pamphlets");
		$form.attr("action", "https://archives.albany.edu/books?f[collecting_area_ssim][]=Political+Pamphlets");
			
	});

	$("#searchBooks").click(function () {
		
		$label.text("Rare Books");
		$form.attr("action", "https://archives.albany.edu/books");
			
	});
	
});