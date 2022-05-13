$(function(){
	if ($(this).scrollTop() < 57){
		 $('.navbar-top').removeClass("fixHalf");
		 $('#page-content-wrapper').removeClass("content-spacer");
		 $('.logo').removeClass("logoHide");
		 $('.ualbany').removeClass("logoHide");
		 $('.smallLogo').removeClass("logoShow");
		 $('.side-nav').css({"top":132-$(this).scrollTop()});
		 $('#browseNav').css({"top":132-$(this).scrollTop()});
		 $(".mtypeSpacer").css("margin-top", "0px");
	  } else {
		 $('.navbar-top').addClass("fixHalf");
		 $('#page-content-wrapper').addClass("content-spacer");
		 $('.logo').addClass("logoHide");
		 $('.ualbany').addClass("logoHide");
		 $('.smallLogo').addClass("logoShow");
		 $('.side-nav').css({"top": "-5px"});
		 $('#browseNav').css({"top": "-5px"});
		 $(".mtypeSpacer").css("margin-top", "107px");
	  }
  $(window).scroll(function(){
	  if ($(this).scrollTop() < 57){
		 $('.navbar-top').removeClass("fixHalf");
		 $('#page-content-wrapper').removeClass("content-spacer");
		 $('.logo').removeClass("logoHide");
		 $('.ualbany').removeClass("logoHide");
		 $('.smallLogo').removeClass("logoShow");
		 $('.side-nav').css({"top":132-$(this).scrollTop()});
		 $('#browseNav').css({"top":132-$(this).scrollTop()});
		 $(".mtypeSpacer").css("margin-top", "0px");
	  } else {
		 $('.navbar-top').addClass("fixHalf");
		 $('#page-content-wrapper').addClass("content-spacer");
		 $('.logo').addClass("logoHide");
		 $('.ualbany').addClass("logoHide");
		 $('.smallLogo').addClass("logoShow");
		 $('.side-nav').css({"top": "-5px"});
		  $('#browseNav').css({"top": "-5px"});
		  $(".mtypeSpacer").css("margin-top", "107px");
	  }
  });
});


$(document).ready(function(){    
	$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(this).toggleClass("slideRight");
    });
});

//mobile nav close when link is clicked
$(function(){
	$("#browseNav .list-group-item").on('click', function(){
		if ($(".jumbotron").text().match("UAlbany")) {
		
		} else {
			console.log($(".jumbotron").text());
			$("#wrapper").removeClass("toggled");
			$("#menu-toggle").removeClass("slideRight");
		}
	});	
	
});

$(document).ready(function(){    
	$('.collapse').on('shown.bs.collapse', function () {
		$(this).prev().find("span.glyphicon-triangle-bottom").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-top");
	});


	$('.collapse').on('hidden.bs.collapse', function () {
		$(this).prev().find("span.glyphicon-triangle-top").removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom");
	});
});
