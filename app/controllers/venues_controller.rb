# This is the venues controller
class VenuesController < ApplicationController
  # provide definitions for controller actions
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @venues = Venue.all
  end

  def show; end

  def new; end

  def create; end

end
