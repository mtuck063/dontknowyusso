$(document).ready(function(){ 

	var oddClick1 = true;
	var oddClick2 = true;

	// Hide all command buttons for playing music until they are hovered over
	$("img.playbutton1, img.playbutton2, img.pausebutton1, img.pausebutton2").hide();

	
	$(".music-container-1").mouseenter( function(){
		if(oddClick1){
			$("img.playbutton1").fadeIn(400);
		}else{
			$("img.pausebutton1").fadeIn(400);
		}
		$(".music-container-1").css({ 'cursor' : 'pointer' })

	});

	$(".music-container-1").mouseleave( function(){
		$("img.playbutton1").fadeOut(400);
		$("img.pausebutton1").fadeOut(400);
		$(".music-container-1").css({ 'cursor' : 'none' })
	});

	$(".music-container-2").mouseenter( function(){
		if (oddClick2){
			$("img.playbutton2").fadeIn(400);
		}else{
			$("img.pausebutton2").fadeIn(400);
		}
		$(".music-container-2").css({ 'cursor' : 'pointer' })

	});

	$(".music-container-2").mouseleave( function(){
		$("img.playbutton2").fadeOut(400);
		$("img.pausebutton2").fadeOut(400);
		$(".music-container-2").css({ 'cursor' : 'none' })
	});

	$(".music-container-1").click(function(){
		if(oddClick1){
			$(".song1").get(0).play();
			$("img.pausebutton1").fadeIn(400);
			$("img.playbutton1").fadeOut(400);
		}else{
			$(".song1").get(0).pause();
			$("img.pausebutton1").fadeOut(400);
			$("img.playbutton1").fadeIn(400);
		}
		oddClick1 = !oddClick1;
	});

	$(".music-container-2").click(function(){
		if(oddClick2){
			$(".song2").get(0).play();
			$("img.pausebutton2").fadeIn(400);
			$("img.playbutton2").fadeOut(400);
		}else{
			$(".song2").get(0).pause();
			$("img.pausebutton2").fadeOut(400);
			$("img.playbutton2").fadeIn(400);
		}
		oddClick2 = !oddClick2;
	});

});