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
	pageAnimation();
	start(); 
	homePage();
	scaleVideo();

	var instagram_url = "https://api.instagram.com/v1/users/478280771/media/recent/?client_id=1770a52803f4453f95898d9db37464bf";
	endlessIGScrolling(instagram_url);

	$(window).scroll( function(){
		if($(window).scrollTop() > 50){
			$("div#header-container").fadeIn(300);
			$(".slide-up-effect a.slider").css({ 'color' : '#141519'});
		}else{
			$("div#header-container").fadeOut(300);
			$(".slide-up-effect a.slider").css({ 'color' : '#fff'});
		}
	});

	$("a").click(function(){
		$("div#header-container").fadeOut(300);
	});

	setTimeout(function(){
		$(".bg-zoom-in").css({ 'transform' : 'scale(1.5, 1.5)'});
	}, 500);

});

window.onresize = function() {
	start(); 
	scaleVideo();
};

function start(){

	centerInWindowVertical("div#caption");
	centerInWindowVertical("#featuredvid, .close");
	$("#featuredvid, .close").css({ 'left' : (($(window).width() - $("#featuredvid").width())/2) });
	$("div#watchvid").css({ 'top' : (($(window).height() - $("div#caption").height())/2) + $("div#caption").height() + 15 });


}

function homePage(){

	// Fade in effect on landing page text
	$("div#thebasis-container-1 img").hide();
	$("#doyouknow").hide();
	// console.log($("#doyouknow"));
	$("#doyouknow").fadeIn(1500);
	$("#doyouknow").delay(1500).fadeOut(500);
	$("div#thebasis-container-1 img").delay(5000).fadeIn(1500);

	// Hide the home page music video 
	$("#featuredvid, .close").hide();

	// Fade in the home page music video when clicked
	$("#watchvid").click(function(){
		$("#featuredvid").fadeIn(500);
		$(".close").show();
		$("#featuredvid").get(0).play();
		$("#bgvideo").get(0).pause();
	});

	// Close the home page music video when close button clicked
	$(".close").click(function(){
		$("#featuredvid").hide();
		$(".close").hide();
		$("#featuredvid").get(0).pause();
		$("#bgvideo").get(0).play();
	});

}

function centerInWindowVertical(element){
	$(element).css({ 'top' : (($(window).height() - $(element).height())/2) });
	return false;
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

function endlessIGScrolling(url){
	var fatesabitch = true;
	$.ajax({
        url: url,
        dataType: "jsonp", 
        cache: false,
        success: function (data) {
        	url = data.pagination.next_url;
        	for(var i = 0; i < data.data.length; i++){
        		if( typeof data.data[i].videos == "undefined" ){
        			$("#followyusso-container-2").append("<img class='instagram-photos' src='"
        				+ data.data[i].images.standard_resolution.url + "'>");
        			$("#followyusso-container-2").append("<div class='instagram-caption'>"+ data.data[i].caption.text +"</div>");
        		}
        	}

		   	$(window).scroll( function(){ 
				if($(window).scrollTop() >= $(document).height() - $(window).height() - 500 && fatesabitch){
					endlessIGScrolling(url);
					fatesabitch = false;
				}else if($(window).scrollTop() >=  $(window).height()){
					$("#scroll").fadeOut(1500);
					$(".arrows").fadeOut(1500);
				}
			});
		}
	});	
	return false;
}

function pageAnimation(){

	$(".animsition").animsition({
	  inClass               :   'fade-in',
	  outClass              :   'fade-out',
	  inDuration            :    1000,
	  outDuration           :    800,
	  linkElement           :   '.animsition-link', 
	  loading               :    true,
	  loadingParentElement  :   'body', 
	  loadingClass          :   'animsition-loading',
	  unSupportCss          :   [],
	  overlay               :   false,
	  overlayClass          :   'animsition-overlay-slide',
	  overlayParentElement  :   'body',
	  opacity 							: 	1
	});

};






