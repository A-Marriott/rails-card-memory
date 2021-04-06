class PagesController < ApplicationController
  def home
    @images = ["https://bit.ly/2Q4JPVG"]
               # "https://bit.ly/3dGFLDd",
               # "https://bit.ly/31SFkjK",
               # "https://bit.ly/3rW160P",
               # "https://bit.ly/3ujxdsS",
               # "https://bit.ly/3cTULif"]
    @randomised_images = @images.map { |image| [image, image] }.flatten.shuffle
  end
end
