$(function(){
	if ($('section.fill').length) {
		var $randomImage = Math.floor(Math.random() * 17) + 1;
		$imgURL = $("section.fill").css('background-image').split("fill")[0] + "fill" + $randomImage + ".jpg"
		$("section.fill").css('background-image', $imgURL);
	}
});
