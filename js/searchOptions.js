$(function() {
	var $form = $("form.search-query-form");
	var $label = $("#searchOptions");
	var $localAction = window.location.protocol + "//" + window.location.hostname;

	$("#searchAll").click(function () {
		$label.text("Collections");
		$form.attr("action", $localAction + "/description/catalog");
		$form.find(".collectingArea").remove();
		$form.prepend("<input type='hidden' name='group' value='true'>");
	});

	$("#searchHistory").click(function () {
		$label.text("UAlbany History");
		$form.attr("action", $localAction + "/history");
		$form.find(".collectingArea").remove();
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
