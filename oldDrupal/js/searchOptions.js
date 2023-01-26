$(function(){

	$("#searchCollections").click(function () {
		var $form = $("form.navbar-form");
		
		$form.find("span.glyphicon-ok").addClass("glyphicon-none").removeClass("glyphicon-ok");
		$(this).find(".glyphicon-none").removeClass('glyphicon-none');
		$(this).find('span:first').addClass('glyphicon-ok');
		
		$form.attr("action", "https://meg.library.albany.edu:8443/archive/search");
		$form.find("input").attr("placeholder", "Collections");
		$form.find("input").attr("name", "keyword");
		$form.find(":hidden").remove();
			
	});
	
	$("#searchBooks").click(function () {
		var $form = $("form.navbar-form");
		
		$form.find("span.glyphicon-ok").addClass("glyphicon-none").removeClass("glyphicon-ok");
		$(this).find(".glyphicon-none").removeClass('glyphicon-none');
		$(this).find('span:first').addClass('glyphicon-ok');
		
		$form.attr("action", "http://p8991-libms1.albany.edu.libproxy.albany.edu/F/");
		$form.find("input").attr("placeholder", "Rare Books");
		$form.find("input").attr("name", "request");
		$form.find(":hidden").remove();
		

		$form.prepend("<input type='hidden' name='find_code' value='WTS'>");
		$form.prepend("<input type='hidden' name='filter_request_5' value='ALBU'>");
		$form.prepend("<input type='hidden' name='filter_code_5' value='WSL'>");
		$form.prepend("<input type='hidden' name='filter_request_4' value=''>");
		$form.prepend("<input type='hidden' name='filter_code_4' value='WCL'>");
		$form.prepend("<input type='hidden' name='filter_request_3' value=''>");
		$form.prepend("<input type='hidden' name='filter_code_3' value='WYR'>");
		$form.prepend("<input type='hidden' name='filter_request_2' value=''>");
		$form.prepend("<input type='hidden' name='filter_code_2' value='WYR'>");
		$form.prepend("<input type='hidden' name='filter_request_1' value=''>");
		$form.prepend("<input type='hidden' name='filter_code_1' value='WLN'>");
		$form.prepend("<input type='hidden' name='func' value='find-a'>");
		
			
	});
	
	$("#searchMathes").click(function () {
		var $form = $("form.navbar-form");
		
		$form.find("span.glyphicon-ok").addClass("glyphicon-none").removeClass("glyphicon-ok");
		$(this).find(".glyphicon-none").removeClass('glyphicon-none');
		$(this).find('span:first').addClass('glyphicon-ok');
		
		$form.attr("action", "http://p8991-libms1.albany.edu.libproxy.albany.edu/F/");
		$form.find("input").attr("placeholder", "Mathes Children's Literature");
		$form.find("input").attr("name", "request");
		$form.find(":hidden").remove();
		
		$form.prepend("<input type='hidden' name='y' value='0'>");
		$form.prepend("<input type='hidden' name='x' value='0'>");
		$form.prepend("<input type='hidden' name='adjacent' value='N'>");
		$form.prepend("<input type='hidden' name='request' value=''>");
		$form.prepend("<input type='hidden' name='find_code' value='WTS'>");
		$form.prepend("<input type='hidden' name='request_op' value='AND'>");
		$form.prepend("<input type='hidden' name='request' value=''>");
		$form.prepend("<input type='hidden' name='find_code' value='WTS'>");
		$form.prepend("<input type='hidden' name='request_op' value='AND'>");
		$form.prepend("<input type='hidden' name='find_code' value='WTS'>");
		$form.prepend("<input type='hidden' name='filter_request_5' value='ALBU'>");
		$form.prepend("<input type='hidden' name='filter_code_5' value='WSL'>");
		$form.prepend("<input type='hidden' name='filter_request_4' value='jc*'>");
		$form.prepend("<input type='hidden' name='filter_code_4' value='WCL'>");
		$form.prepend("<input type='hidden' name='filter_request_3' value=''>");
		$form.prepend("<input type='hidden' name='filter_code_3' value='WYR'>");
		$form.prepend("<input type='hidden' name='filter_request_2' value=''>");
		$form.prepend("<input type='hidden' name='filter_request_2' value=''>");
		$form.prepend("<input type='hidden' name='filter_request_2' value=''>");
		$form.prepend("<input type='hidden' name='filter_code_2' value='WYR'>");
		$form.prepend("<input type='hidden' name='filter_request_1' value=''>");
		$form.prepend("<input type='hidden' name='filter_code_1' value='WLN'>");
		$form.prepend("<input type='hidden' name='func' value='find-a'>");
			
	});
	
	$("#searchPhotos").click(function () {
		var $form = $("form.navbar-form");
		
		$form.find("span.glyphicon-ok").addClass("glyphicon-none").removeClass("glyphicon-ok");
		$(this).find(".glyphicon-none").removeClass('glyphicon-none');
		$(this).find('span:first').addClass('glyphicon-ok');
		
		$form.attr("action", "https://luna.albany.edu/luna/servlet/view/search");
		$form.find("input").attr("placeholder", "Digital Selections");
		$form.find("input").attr("name", "q");
		$form.find(":hidden").remove();
			
	});
	
	$("#searchAsp").click(function () {
		var $form = $("form.navbar-form");
		
		$form.find("span.glyphicon-ok").addClass("glyphicon-none").removeClass("glyphicon-ok");
		$(this).find(".glyphicon-none").removeClass('glyphicon-none');
		$(this).find('span:first').addClass('glyphicon-ok');
		
		$form.attr("action", "https://libsearch.albany.edu/search");
		$form.find("input").attr("placeholder", "Student Newspaper");
		$form.find("input").attr("name", "q");
		$form.find(":hidden").remove();
		
		$form.append("<input type='hidden' name='site' value='asp_collection'>");
		$form.append("<input type='hidden' name='client' value='asp_frontend'>");
		$form.append("<input type='hidden' name='output' value='xml_no_dtd'>");
		$form.append("<input type='hidden' name='proxystylesheet' value='asp_frontend'>");
		$form.append("<input type='hidden'  name='proxyreload' value='1'>");
		$form.append("<input type='hidden'  name='numgm' value='5'>");
		$form.append("<input type='hidden' name='filter' value='0'>");
			
	});
	
	$("#searchWebArch").click(function () {
		var $form = $("form.navbar-form");
		
		$form.find("span.glyphicon-ok").addClass("glyphicon-none").removeClass("glyphicon-ok");
		$(this).find(".glyphicon-none").removeClass('glyphicon-none');
		$(this).find('span:first').addClass('glyphicon-ok');
		
		$form.attr("action", "https://library.albany.edu/archive/webarchives/search");
		$form.find("input").attr("placeholder", "Web Archives");
		$form.find("input").attr("name", "query");
		$form.find(":hidden").remove();
			
	});
	
});