$(document).ready(function(){ 

	$("span.music-container").each(function(){
		var oddClick = true;
		var audio = $(this).children()[0];
		var play  = $(this).children()[2];
		var pause = $(this).children()[3];

		$(this).mouseenter( function(){
			if(oddClick){ $(play).fadeIn(200);}
			else{ $(pause).fadeIn(200); }
		});

		$(this).mouseleave( function(){
			if(oddClick){ $(play).fadeOut(200);}
			else{ $(pause).fadeOut(200); }
		});	

		$(this).click( function(){
			if(oddClick){ 
				$(audio).get(0).play();
				$(pause).fadeIn(200); 
				$(play).fadeOut(200); 
			}
			else{ 
				$(audio).get(0).pause();
				$(pause).fadeOut(200); 
				$(play).fadeIn(200); 
			}
			oddClick = !oddClick;
		});	

	});

});