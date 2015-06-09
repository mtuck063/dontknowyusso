$(document).on('page:change', function(){ 

	$("li.song").click(function(){
		stopper($(this), function(t){
			player(t);
		});

	});

});

function stopper(t, callback){

	$("audio").each(function(){
		$(this).get(0).pause();
	});

	$("section.music-background").each(function(){
		$(this).fadeOut(200);
	});

	callback(t);
};

function player(_this){
	var arr = ["1.  Don't Know Yusso",
						 "2.  Late Nights",
						 "3.  Flex For The Sake Of Flexing",
						 "4.  Perception",
						 "5.  Fire Squad",
						 "6.  Better Believe It"];

	arr = arr.reverse();

	for (var i = 0; i < arr.length; i++) {
		if(_this.text() == arr[i]){
			$("section.music-background." + i).fadeIn(200);
			$("section.music-background."+ i +" audio").get(0).play();
		}
	};		

};