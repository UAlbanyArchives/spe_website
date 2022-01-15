$(function(){

	var $form = $("form.search-query-form");
	var $label = $("#searchOptions");
	var $localAction = window.location.protocol + "//" + window.location.hostname

	$("#searchAll").click(function () {
		
		$label.text("Collections");
		$form.attr("action", $localAction + "/search");
			
	});
	
	$("#searchArclight").click(function () {
		
		console.log($label.text());
		$label.text("Archives & Manuscripts");
		$form.attr("action", $localAction + "/description");
			
	});

	$("#searchHyrax").click(function () {
		
		$label.text("Online Content");
		$form.attr("action", $localAction + "/catalog");
			
	});

	$("#searchHistory").click(function () {
		
		$label.text("UAlbany History");
		$form.attr("action", $localAction + "/history");
			
	});

	$("#searchMathes").click(function () {
		
		$label.text("Mathes Childrens Literature");
		$form.attr("action", $localAction + "/books");
		$form.find(".collectingArea").remove();
		$form.prepend("<input class='collectingArea' type='hidden' name='f[collecting_area_ssim][]' value='Mathes Childrens Literature'>");
			
	});

	$("#searchPamphlets").click(function () {
		
		$label.text("Political Pamphlets");
		$form.attr("action", $localAction + "/books");
		$form.find(".collectingArea").remove();
		$form.prepend("<input class='collectingArea' type='hidden' name='f[collecting_area_ssim][]' value='Political Pamphlets'>");
			
	});

	$("#searchBooks").click(function () {
		
		$label.text("Rare Books");
		$form.attr("action", $localAction + "/books");
		$form.find(".collectingArea").remove();

	});
	
});