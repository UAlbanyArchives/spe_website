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
		$form.attr("action", "https://archives.albany.edu/books");
		$form.prepend("<input type='hidden' name='f[collecting_area_ssim][]' value='Mathes%2BChildrens%2BLiterature'>");
			
	});

	$("#searchPamphlets").click(function () {
		
		$label.text("Political Pamphlets");
		$form.attr("action", "https://archives.albany.edu/books");
		$form.prepend("<input type='hidden' name='f[collecting_area_ssim][]' value='Political%2BPamphlets'>");
			
	});

	$("#searchBooks").click(function () {
		
		$label.text("Rare Books");
		$form.attr("action", "https://archives.albany.edu/books");
		$form.find(":hidden").remove();

	});
	
});