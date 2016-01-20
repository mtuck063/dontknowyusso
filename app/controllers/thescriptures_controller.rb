class ThescripturesController < ApplicationController

	def basis
    @shows = Show.all.last(5).reverse
	end

	def artist
	end

	def art
		@music = [
			{ "name" => "Don't Know Yusso", "song" => "intro.mp3", "image" => "contemplating.jpg" },
			{ "name" => "Late Nights", "song" => "latenights.mp3", "image" => "looking-down.jpg" },
			{ "name" => "Flex For The Sake Of Flexing", "song" => "flex.mp3", "image" => "switching-hands.jpg" },
			{ "name" => "Perception", "song" => "perception.mp3", "image" => "sitting-down.jpg" },
			{ "name" => "Fire Squad", "song" => "firesquad.mp3", "image" => "blowing-upwards.jpg" },
			{ "name" => "Better Believe It", "song" => "betterbelieveit.mp3", "image" => "hands-crossed.jpg" }
		]
	end

end