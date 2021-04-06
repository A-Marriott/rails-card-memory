class PagesController < ApplicationController
  def home
    @images = ["https://bit.ly/39MzS6w",
               "https://bit.ly/3dGFLDd",
               "https://bit.ly/3rXxMqy",
               "https://bit.ly/3rW160P",
               "https://bit.ly/3ujxdsS",
               "https://bit.ly/3cTULif"]
    @randomised_images = @images.map { |image| [image, image] }.flatten.shuffle
  end
end
