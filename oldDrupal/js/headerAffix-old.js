$(function(){
  $(window).scroll(function(){
	  if ($(this).scrollTop() < 57){
		 $('.navbar-top').removeClass("fixHalf");
		 $('#page-content-wrapper').removeClass("content-spacer");
		 $('.logo').removeClass("logoHide");
		 $('.ualbany').removeClass("logoHide");
		 $('.smallLogo').removeClass("logoShow");
		 $('.side-nav').css({"top":57-$(this).scrollTop()});
		 $('#browseNav').css({"top":57-$(this).scrollTop()});
		 $('.alphaContent').css({"top": "0px"});
		 
	  } else {
		 $('.navbar-top').addClass("fixHalf");
		 $('#page-content-wrapper').addClass("content-spacer");
		 $('.logo').addClass("logoHide");
		 $('.ualbany').addClass("logoHide");
		 $('.smallLogo').addClass("logoShow");
		 $('.side-nav').css({"top": "-5px"});
		 $('#browseNav').css({"top": "-5px"});
		 $('.alphaContent').css({"top": "109px"});
		 
	  }
  });
});

$(function(){
	$( "#requestBrowse" ).on('shown.bs.modal', function(e){
		var id = $(e.relatedTarget).attr("id");
		var link = $("a#scheduleVisit").attr("href");
		$("a#scheduleVisit").attr("href", link + '?col=' + id);
		var remote = $("a#remoteRequest").attr("href");
		$("a#remoteRequest").attr("href", remote + '?col=' + id);
		$('#requestBrowse').focus();
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
		$("#wrapper").removeClass("toggled");
		$("#menu-toggle").removeClass("slideRight");
	});	
});	