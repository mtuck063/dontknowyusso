class ThescripturesController < ApplicationController

	def thebasis
    @shows = Show.all.last(3).reverse
	end

	def theartist
	end

	def theart
	end

	def contact
	end

	def shows
	end

	def followyusso
	end

end