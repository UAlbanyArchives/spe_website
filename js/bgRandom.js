/*
$(function(){
			Modernizr.on('webp', function(result) {
			  if (result != false) {
				var format = ".webp";
			  } else {
				var format = ".jpg";
			  }
				if ($("body").css("background-image") != 'none')  {
					var $randomBG = Math.floor(Math.random() * ((43-1)+1) + 1);
					if ($(window).width() <= 1200) {
						$("body").css('background-image', "url('img/1000/bg" + $randomBG + format + "')");
					} else if ($(window).width() <= 1500) {
						$("body").css('background-image', "url('img/1200/bg" + $randomBG + format + "')");
					} else if ($(window).width() <= 1800) {
						$("body").css('background-image', "url('img/1500/bg" + $randomBG + format + "')");
					} else {
						$("body").css('background-image', "url('img/1800/bg" + $randomBG + format + "')");
					}
				}
			})
		});
*/

$(function(){
	if ($("body").css("background-image") != 'none')  {
		if ($('#espyBG').length > 0) {
			if ($(window).width() <= 1200) {
				$("body").css('background-image', "url('https://library.albany.edu/sites/all/themes/New_UArchives/img/1100/news1.jpg')");
			} else if ($(window).width() <= 1500) {
				$("body").css('background-image', "url('https://library.albany.edu/sites/all/themes/New_UArchives/img/1200/news1.jpg')");
			} else if ($(window).width() <= 1800) {
				$("body").css('background-image', "url('https://library.albany.edu/sites/all/themes/New_UArchives/img/1600/news1.jpg')");
			} else {
				$("body").css('background-image', "url('https://library.albany.edu/sites/all/themes/New_UArchives/img/1900/news1.jpg')");
			}
		} else {
			var $randomBG = Math.floor(Math.random() * ((43-1)+1) + 1);
			if ($(window).width() <= 1200) {
				$("body").css('background-image', "url('https://archives.albany.edu/browse/img/1000/bg" + $randomBG + ".jpg')");
			} else if ($(window).width() <= 1500) {
				$("body").css('background-image', "url('https://archives.albany.edu/browse/img/1200/bg" + $randomBG + ".jpg')");
			} else if ($(window).width() <= 1800) {
				$("body").css('background-image', "url('https://archives.albany.edu/browse/img/1500/bg" + $randomBG + ".jpg')");
			} else {
				$("body").css('background-image', "url('https://archives.albany.edu/browse/img/1800/bg" + $randomBG + ".jpg')");
			}
		}
	}
});