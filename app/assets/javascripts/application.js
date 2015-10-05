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
//= require jquery-ui/effect-drop
//= require jquery.countdown
//= require turbolinks
//= require_tree .



$(document).on('page:change', function(){

  $(".page-load-effect").delay(500).fadeIn(500);
  $("input#show_location").geocomplete();
	start(); 
	homePage();
	scaleVideo();

	$("#countdown").countdown({until: new Date(2015, 10-1, 20), format: 'dHMS'});

	setTimeout(function(){
		$(".bg-zoom-in").addClass("transform");
	}, 1500);

	$(".shows-row").mouseenter( function(){
		$(this).children().addClass("show");
		$($(this).children()[4]).css({ 'width' : '100%' });
	});

	$(".shows-row").mouseleave( function(){
		$(this).children().removeClass("show");
		$("svg.line").css({'width' : '5%'});
	});

	$("a.header-link").mouseenter( function(){
		$($(this).children()[1]).css({'opacity' : '1'});
	});

	$("a.header-link").mouseleave( function(){
		$($(this).children()[1]).css({'opacity' : '0'});
	});

	$("svg.hamburger").click(function(){
		$("div#header-container").fadeIn(200);
		$("div.grid").delay(250).show('drop', {direction: 'up'}, 500);
		$("a.header-link").css({'opacity' : '1'});
		$(this).css({'opacity' : '0','z-index' : '100' });
		$("svg.close-x").css({'opacity' : '1', 'z-index' : '101'});
	});

	$("svg.close-x").click(function(){
		$("div#header-container").fadeOut(200);
		$("div.grid").fadeOut(200);
		$(this).css({'opacity' : '0', 'z-index' : '100'});
		$("svg.hamburger").css({'opacity' : '1', 'z-index' : '101'});
	});

	$("div.inner-mb-shows-container, div.mb-shows-container").css({ 'height' : ($("div.shows-title").height() + $("div#shows-table").height() +  100) });
	$("div.lyrics-container-1, div.lyrics-container-2").css({ 'height' : ($("div.lyrics").height() + 50) });

	if( $(window).width() < 750 ){
		if( window.location.pathname != "/" ) {
			window.location.replace(window.location.origin);
		}
	}

	$(window).scroll( function(){ 
	if($(window).scrollTop() >=  250){		
			$("#scroll").fadeOut(500);		
		}		
	});		

});


window.onresize = function() {
	start(); 
	scaleVideo();
};

function start(){

	$("#doyouknow").delay(1500).fadeOut(500);

	if($(window).width < 750){
		$("div#mb").show(1);
	}else{
		$("div#mb").hide(1);
	}

}

function homePage(){

	// Fade in effect on landing page text
	$("#doyouknow").delay(100).fadeIn(1000);
	$("#doyouknow").delay(1000).fadeOut(500);
	$("div#thebasis-container #yussotext").delay(3500).fadeIn(1000);

	// Fade in the home page music video when clicked
	$("#watchvid").click(function(){
		$("div.video-wrapper").fadeIn(500);
		$("video#featuredvid").get(0).play();
		$("video#bgvideo").get(0).pause();
	});

	// Close the home page music video when close button clicked
	$(".close").click(function(){
		$("div.video-wrapper").fadeOut(500);
		$("#featuredvid").get(0).pause();
		$("#bgvideo").get(0).play();
	});

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
	return false;
}







