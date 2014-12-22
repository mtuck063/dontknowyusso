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



	if(window.innerWidth > 450){
		$("div#thebasis-container-1 img").hide();
		$("#doyouknow").hide();
		$("#doyouknow").fadeIn(1500);
		$("#doyouknow").delay(1500).fadeOut(500);
		$("div#thebasis-container-1 img").delay(6000).fadeIn(1500);
	}else{
		document.getElementById('bgvideo').style.display = 'none';
		$("div#thebasis-container-1 img").hide();
		$("#doyouknow").hide();
		$("#doyouknow").delay(1000).fadeIn(1500);
		$("div#thebasis-container-1 img").css({ 'top' : '10vh' });
		$("div#thebasis-container-1 img").delay(1000).fadeIn(1500);
	}

	//$("div#thebasis-container-1 img").delay(2000).animate({opacity: [0.7, "linear"]}, 1500);

});



window.onresize = function() {
	start(); 
	scaleVideo();
};

function start(){

	if(window.innerWidth > 450){
		$("#doyouknow").fadeOut(500);
		document.getElementById('bgvideo').style.display = 'block';
		$("div#thebasis-container-1 img").css({ 'top' : '2vh' });

	}else{
		$("#doyouknow").fadeIn(500);
		$("div#thebasis-container-1 img").css({ 'top' : '10vh' });
		document.getElementById('bgvideo').style.display = 'none';
	}
	
}

function scaleVideo() {

	if(window.innerWidth > 480 ){
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		var nWidth = $('video#bgvideo')[0].videoWidth;
		var nHeight = $('video#bgvideo')[0].videoHeight;

		if( (windowWidth/windowHeight) > (nWidth/nHeight) ){

			console.log('this should print');

			if( (windowHeight / nHeight) > (windowWidth / nWidth) ){
				var scale = (windowHeight / nHeight);
			}else{
				var scale = (windowWidth / nWidth);
			}

			$('video#bgvideo').height( nHeight * scale );
			$('video#bgvideo').width( nWidth * scale );
		}
	}
}

