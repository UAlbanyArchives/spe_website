

$.ajax({
    url: "/sites/all/themes/New_UArchives/collections.xml", // name of file you want to parse
    dataType: "xml", // type of file you are trying to read
    success: parse, // name of the function to call upon success
		error: function(){alert("Error: Failed to load featured collections");}
});

function parse(document){
	var $count = $(document).find("collection").length;
	var $index1 = Math.floor(Math.random() * $count) + 1
	var $index2 = Math.floor(Math.random() * $count) + 1
	while ($index2 == $index1) {
		var $index2 = Math.floor(Math.random() * $count) + 1
	}
	var $index3 = Math.floor(Math.random() * $count) + 1
	while ($index3 == $index1 || $index3 === $index2) {
		var $index3 = Math.floor(Math.random() * $count) + 1
	}
	var $collectionElement = $("#collection1")
	$("#collection1").remove();
	$("#collection2").remove();
	$("#collection3").remove();
	$(document).find("collection").each(function (inx, val) {
		
		var $newCollection = $(this)
		$collectionElement.removeClass("show")
		$collectionElement.children("h2").text($newCollection.find("name").text())
		$collectionElement.children("p").text($newCollection.find("abstract").text())
		$collectionElement.children("a").each(function () {
			if ($(this).hasClass("btn")) {
				$(this).attr("href", $newCollection.find("link").text())
			}
			else {
				$(this).attr("href", $newCollection.find("a").attr("href"))
				$(this).children("h5").text($newCollection.find("a").text())
			}
		});
		index = inx + 1
		if (index == $index1) {
			$collectionElement.addClass("show")
		} else if (index == $index2) {
			$collectionElement.addClass("show")
		} else if (index == $index3) {
			$collectionElement.addClass("show")
		}
		
		$collectionElement.clone().appendTo($("#featuredContainer"));
		
	});
	/*
	$("#collection1").children("h2").text($col1.find("name").text())
	$("#collection2").children("h2").text($col2.find("name").text())
	$("#collection3").children("h2").text($col3.find("name").text())
	
	$("#collection1").children("p").text($col1.find("abstract").text())
	$("#collection2").children("p").text($col2.find("abstract").text())
	$("#collection3").children("p").text($col3.find("abstract").text())

	
	$("#collection1").children("a").each(function () {
		if ($(this).hasClass("btn")) {
			$(this).attr("href", $col1.find("link").text())
		}
		else {
			$(this).attr("href", $col1.find("a").attr("href"))
			$(this).children("h5").text($col1.find("a").text())
		}
	});
	$("#collection2").children("a").each(function () {
		if ($(this).hasClass("btn")) {
			$(this).attr("href", $col2.find("link").text())
		}
		else {
			$(this).attr("href", $col2.find("a").attr("href"))
			$(this).children("h5").text($col2.find("a").text())
		}
	});
	$("#collection3").children("a").each(function () {
		if ($(this).hasClass("btn")) {
			$(this).attr("href", $col3.find("link").text())
		}
		else {
			$(this).attr("href", $col3.find("a").attr("href"))
			$(this).children("h5").text($col3.find("a").text())
		}
	});*/
}

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
