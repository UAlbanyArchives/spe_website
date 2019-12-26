$(document).ready(function () {
    $('.desc').on('hide.bs.collapse', function () {
	  $(this).children('a').children('i').removeClass("fa-arrow-up").addClass("fa-arrow-down")
	})
	$('.desc').on('show.bs.collapse', function () {
	  $(this).children('a').children('i').removeClass("fa-arrow-down").addClass("fa-arrow-up")
	})
});