$(document).on('page:change', function(){ 

	$($("li.song")[0]).addClass("active");

	$("section.music-background.5 audio").on('ended', function(){
		stopper($($("li.song")[1]), function(_t){
			player(_t);
		});
	});

	$("li.song").click(function(){
		stopper($(this), function(_this){
			player(_this);
		});

	});

});

function stopper(_this, callback){

	$("li.song").each(function(){
		$(this).removeClass("active");
	});

	$("audio").each(function(){
		$(this).get(0).pause();
	});

	$("section.music-background").each(function(){
		$(this).fadeOut(200);
	});


	callback(_this);
};

function player(_this){
	var arr = ["1.  Don't Know Yusso",
						 "2.  Late Nights",
						 "3.  Flex For The Sake Of Flexing",
						 "4.  Perception",
						 "5.  Fire Squad",
						 "6.  Better Believe It"];

	arr = arr.reverse();
	
	_this.addClass("active");

	for (var i = 0; i < arr.length; i++) {
		if(_this.text() == arr[i]){
			$("section.music-background." + i).fadeIn(200);
			$("section.music-background."+ i +" audio").get(0).play();
			$("section.music-background."+ i +" audio").on('ended', function(){
				stopper(_this.next(), function(_t){
					player(_t);
				});
			});
		}
	};		

};