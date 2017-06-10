class Todo < ApplicationRecord

	before_create :default_done
	def default_done
		self.done = false
	end
end
