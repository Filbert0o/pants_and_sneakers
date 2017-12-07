# This is the venues controller
class VenuesController < ApplicationController
  # provide definitions for controller actions
  def index
    @venues = Venue.all
  end

  def show; end
end
