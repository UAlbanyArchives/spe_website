/*$(function(){
	var $numberofSlides = $('.item').length;
	var $currentSlide = Math.floor((Math.random() * $numberofSlides));
	
	$( ".carousel-indicators li[data-slide-to*='active']").attr("data-slide-to", "0")
	
	$(".topCarousel").children('div.item').each(function(){
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
		}
	});
	
	$('.carousel-indicators li').each(function(){		
		var $slideValue = $(this).attr('data-slide-to');
		
		if($currentSlide == $slideValue) {
			$(this).addClass('active');
			$('.item').eq($slideValue).addClass('active');
		} else {
			$(this).removeClass('active');
			$('.item').eq($slideValue).removeClass('active');
		}
	});
});*/

$(function(){

	/*var $randomNews = Math.floor(Math.random() * ((2-1)+1) + 1);
	var $randomBrown = Math.floor(Math.random() * ((2-1)+1) + 1);
	var $randomKennedy = Math.floor(Math.random() * ((3-1)+1) + 1);
	var $randomMathes = Math.floor(Math.random() * ((2-1)+1) + 1);
	var $randomMpa = Math.floor(Math.random() * ((3-1)+1) + 1);
	var $randomNdpa = Math.floor(Math.random() * ((4-1)+1) + 1);
	var $randomNdpa = Math.floor(Math.random() * ((2-1)+1) + 1);
	var $randomGer = Math.floor(Math.random() * ((3-1)+1) + 1);
	var $randomUa = Math.floor(Math.random() * ((3-1)+1) + 1);
	var $randomUnrest = Math.floor(Math.random() * ((3-1)+1) + 1);*/
	var $randomVisit = Math.floor(Math.random() * ((3-1)+1) + 1);
	
	if ($(window).width() <= 1200) {
		var $size = "1000"
	} else if ($(window).width() <= 1500) {
		var $size = "1200"
	} else if ($(window).width() <= 1800) {
		var $size = "1600"
	} else {
		var $size = "default"
	}

	$('.sliderImage').each(function(i, obj) {
	    var $bgImage = $(obj).css('background-image');
		var $resizeImage = $bgImage.replace("default", $size);
		$(obj).css("background-image", $resizeImage);
	});

	$("#visit").attr('src', "https://archives.albany.edu/web/img/visit" + $randomVisit + ".jpg");
});