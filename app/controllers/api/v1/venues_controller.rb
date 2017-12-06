# this is Api Venues Controller
class Api::V1::VenuesController < ApiController
  def index
    venues = Venue.all
    render json: venues
  end

  def show
    venue = Venue.find(params[:id])
    render json: venue
  end
end
