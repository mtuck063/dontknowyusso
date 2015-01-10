// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



$(document).ready(function(){ 

	start(); 
	scaleVideo();
	var url = "https://api.instagram.com/v1/users/478280771/media/recent/?client_id=1770a52803f4453f95898d9db37464bf";
	endlessScrolling(url);
	var hash = window.location.hash;
	var placeinwindow;
	window.location.hash = "";

	if(window.location.pathname == "/theART"){

		if($(window).scrollTop() >= $(window).height()*2 ){
			$('#three').css({'background-color' : '#fff' });
			$('#two, #one').css({'background-color' : '' });
		}
		else if($(window).scrollTop() <= $(window).height()*2 && $(window).scrollTop() >= $(window).height()){
			$('#one, #three').css({'background-color' : '' });
			$('#two').css({'background-color' : '#fff' });
		}else{
			$('#three, #two').css({'background-color' : '' });
			$('#one').css({'background-color' : '#fff' });
		}

		$(window).scroll( function(){ 
			if($(window).scrollTop() >= $(window).height()*1.5 ){
				$('#three').css({'background-color' : '#fff' });
				$('#two, #one').css({'background-color' : '' });
			}
			else if($(window).scrollTop() <= $(window).height()*2 && $(window).scrollTop() >= $(window).height()/2){
				$('#one, #three').css({'background-color' : '' });
				$('#two').css({'background-color' : '#fff' });
			}else{
				$('#three, #two').css({'background-color' : '' });
				$('#one').css({'background-color' : '#fff' });
			}
		});

		$('div#mixtapes > .container:nth-child(1)').click( function(){
			$('html,body').animate({
				scrollTop: $('#theart-container-2').offset().top
			}, 600);
		});

		$('div#mixtapes > .container:nth-child(2)').click( function(){
			$('html,body').animate({
				scrollTop: $('#theart-container-3').offset().top
			}, 600);
		});

	}

	if(window.innerWidth > 450){
		$("div#thebasis-container-1 img").hide();
		$("#doyouknow").hide();
		$("#doyouknow").fadeIn(1500);
		$("#doyouknow").delay(1500).fadeOut(500);
		$("div#thebasis-container-1 img").delay(5000).fadeIn(1500);
	}else{
		$("div#thebasis-container-1 img").hide();
		$("#doyouknow").hide();
		$("#doyouknow").delay(1000).fadeIn(1500);
		$("div#thebasis-container-1 img").css({ 'top' : '10vh' });
		$("div#thebasis-container-1 img").delay(1000).fadeIn(1500);
	}

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 600);
				return false;
			}
		}
	});

	$("#featuredvid").hide();
	$(".close").hide();

	$("#watchvid").click(function(){
		$("#featuredvid").fadeIn(500);
		$(".close").show();
		$("#featuredvid").get(0).play();
		$("#bgvideo").get(0).pause();

	});

	$(".close").click(function(){
		$("#featuredvid").hide();
		$(".close").hide();
		$("#featuredvid").get(0).pause();
		$("#bgvideo").get(0).play();

	});

	$("#menutext2").css({ 'top' : (($(window).height() - $("div#caption").height())/2) + $("div#caption").height() + 15 });
	$("#mixtapes").css({ 'padding-top' : ((($(window).height() - $("#mixtapes").height())/2) - $(".thetitle").height())/2 });
	$(".soundcloud").css({ 'padding-top' : ((($(window).height() - $(".soundcloud").height())/2) - $(".title").height())/2 });
	$(".thetitle").css({ 'padding-top' : ((($(window).height() - $("#mixtapes").height())/2) - $(".thetitle").height())/2 });
	$(".title").css({ 'padding-top' : ((($(window).height() - $(".soundcloud").height())/2) - $(".title").height())/2 });
	$("div#caption").css({ 'top' : (($(window).height() - $("div#caption").height())/2) });
	$("#featuredvid, .close").css({ 'top' : (($(window).height() - $("#featuredvid").height())/2) });
	$("#featuredvid, .close").css({ 'left' : (($(window).width() - $("#featuredvid").width())/2) });
	$("div#watchvid").css({ 'top' : (($(window).height() - $("div#caption").height())/2) + $("div#caption").height() + 15 });

});



window.onresize = function() {
	start(); 
	scaleVideo();
};

function start(){

	if(window.innerWidth > 450){
		$("#doyouknow").fadeOut(500);
		$("div#thebasis-container-1 img").css({ 'top' : '1vh' });

	}else{
		$("#doyouknow").fadeIn(500);
		$("div#thebasis-container-1 img").css({ 'top' : '10vh' });
	}

	if(window.innerWidth > 760){
		$('video#bgvideo').css({ 'display' : 'block'});
		$('.not-mobile-friendly').css({ 'display' : 'block'});
		$('.mobile-friendly').css({ 'display' : 'none'});
		$('#caption').css({ 'font-size' : '2em'});
		$('.container').css({ 'display' : 'inline-block'});
		$('.container:nth-child(1)').css({ 'margin' : '0 3.5vw 0 6vw'});
		$('.container:nth-child(2)').css({ 'margin' : '0 6vw 0 3.5vw'});

	}else{
		$('video#bgvideo').css({ 'display' : 'none'});
		$('.not-mobile-friendly').css({ 'display' : 'none'});
		$('.mobile-friendly').css({ 'display' : 'block'});
		$('#caption').css({ 'font-size' : '1em'});
		$('.container').css({ 'display' : 'block'});
		$('.container').css({ 'margin' : '4vmax auto'});

	}
	
}

function scaleVideo() {

	if(window.innerWidth > 760 ){
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		var nWidth = 1280;
		var nHeight = 720;

		if( (windowWidth/windowHeight) > (1280/720) ){

			if( (windowHeight / nHeight) > (windowWidth / nWidth) ){
				var scale = (windowHeight / nHeight);
			}else{
				var scale = (windowWidth / nWidth);
			}

			$('video#bgvideo').height( nHeight * scale );
			$('video#bgvideo').width( nWidth * scale );
		}else{
			$('video#bgvideo').height('100vh');
			$('video#bgvideo').width( 'auto' );
		}
	}
}

function endlessScrolling(url){
	var fatesabitch = true;
	$.ajax({
        url: url,
        dataType: "jsonp", 
        cache: false,
        success: function (data) {
        	url = data.pagination.next_url;
        	for(var i = 0; i < data.data.length; i++){
        		if( typeof data.data[i].videos == "undefined" ){
        			$("#theartist-container-2").append("<img class='instagram-photos' src='"
        				+ data.data[i].images.standard_resolution.url + "'>");
        			$("#theartist-container-2").append("<div class='instagram-caption'>"+ data.data[i].caption.text +"</div>");
        		}
        	}


		   	$(window).scroll( function(){ 
				if($(window).scrollTop() >= $(document).height() - $(window).height() - 500 && fatesabitch){
					endlessScrolling(url);
					fatesabitch = false;
				}else if($(window).scrollTop() >=  $(window).height()){
					$("#scroll").fadeOut(1500);
					$(".arrows").fadeOut(1500);
				}
			});
		}
	});	
}




