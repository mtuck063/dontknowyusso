class ThescripturesController < ApplicationController

	def thebasis
    @shows = Show.all.last(5).reverse
	end

	def theartist
	end

	def theart
		@music = [
			{ "name" => "Intro", "song" => "intro.mp3", "image" => "dky.jpg" },
			{ "name" => "Late Nights", "song" => "latenights.mp3", "image" => "ebensmoking.jpg" },
			{ "name" => "Flex For The Sake Of Flexing", "song" => "flex.mp3", "image" => "flexing.jpg" },
			{ "name" => "Perception", "song" => "perception.mp3", "image" => "perception.jpg" },
			{ "name" => "Fire Squad", "song" => "firesquad.mp3", "image" => "darkness.jpg" },
			{ "name" => "Better Believe It", "song" => "betterbelieveit.mp3", "image" => "bbi.jpg" }
		]
	end

end