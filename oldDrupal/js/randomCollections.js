$(function(){
	var $count = $(document).find(".collection").length;
	var $index1 = Math.floor(Math.random() * $count) + 1
	var $index2 = Math.floor(Math.random() * $count) + 1
	while ($index2 == $index1) {
		var $index2 = Math.floor(Math.random() * $count) + 1
	}
	var $index3 = Math.floor(Math.random() * $count) + 1
	while ($index3 == $index1 || $index3 === $index2) {
		var $index3 = Math.floor(Math.random() * $count) + 1
	}
	
	$(document).find(".collection").each(function (inx, val) {
		var $newCollection = $(this)
		$newCollection.removeClass("show")
		
		index = inx + 1
		if (index == $index1) {
			$newCollection.addClass("show")
		} else if (index == $index2) {
			$newCollection.addClass("show")
		} else if (index == $index3) {
			$newCollection.addClass("show")
		}
		
		
	});
});

$(function(){
	$("#featuredMore").click(function() {
		$('#featuredContainer').finish().fadeOut('normal', function(){
			$($('.show').get().reverse()).each(function(index, collection) {
				
				var $max = $("#featuredContainer").find(".collection").length;
				/*console.log($(this).index());*/
				if ($(this).index() + 1 == $max)  {
					if ($("#featuredContainer").children(":first").hasClass("show")) {
						var $newShow = $("#featuredContainer").children(":first").next().next()
					}
					else {
						var $newShow = $("#featuredContainer").children(":first")
					}
				}
				else {
					var $newShow = $(this).next()
				}
				$(this).removeClass("show");
				$newShow.addClass("show");
			});
			$('#featuredContainer').fadeIn('slow');
		});
		
		/*$(".featuredSlider").fadeOut( 'normal', function() {
			$(this).css("color", "red")
			 .fadeIn();
		});*/

	});
});
