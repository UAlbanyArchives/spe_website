$(function(){

	if ($("body").css("background-image") != 'none')  {

		var $randomBG = Math.floor(Math.random() * ((43-1)+1) + 1);

		if ($(window).width() <= 1200) {
			$("body").css('background-image', "url('https://archives.albany.edu/static/img/1000/bg" + $randomBG + ".jpg')");
		} else if ($(window).width() <= 1500) {
			$("body").css('background-image', "url('https://archives.albany.edu/static/img/1200/bg" + $randomBG + ".jpg')");
		} else if ($(window).width() <= 1800) {
			$("body").css('background-image', "url('https://archives.albany.edu/static/img/1500/bg" + $randomBG + ".jpg')");
		} else {
			$("body").css('background-image', "url('https://archives.albany.edu/static/img/1800/bg" + $randomBG + ".jpg')");
		}
	}
});

$(function(){
	if ($('section.fill').length) {
		var $randomImage = Math.floor(Math.random() * 17) + 1;
		$imgURL = $("section.fill").css('background-image').split("fill")[0] + "fill" + $randomImage + ".jpg"
		$("section.fill").css('background-image', $imgURL);
	}
});
