# this is Api Venues Controller
class Api::V1::VenuesController < ApiController
  skip_before_action :verify_authenticity_token
  def index
    venues = Venue.all
    render json: venues
  end

  def show
    venue = Venue.find(params[:id])
    render json: venue
  end

  def new
    venue = Venue.new
    render json: venue
  end

  def create
    venue = Venue.new(venue_params)
    if venue.save
      render json: venue
    else
      render json: { error: venue.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def venue_params
    params.require(:venue).permit(
      :name,
      :address,
      :city,
      :state,
      :zip,
      :website,
      :age_restriction,
      :food_options,
      :parking,
      :hours,
      :phone,
      :dress_code,
      :cover_charge,
      :cash_only,
      :image_url
    )
  end
end
