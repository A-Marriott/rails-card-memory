class PagesController < ApplicationController
  def home
    @images = ["https://images.unsplash.com/photo-1617633859164-9448202becfc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1617649002577-8777da6c7969?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=696&q=80"]
    @randomised_images = @images.map { |image| [image, image] }.flatten.shuffle
  end
end

# array of images
#
