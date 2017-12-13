# reviews controller for API calls
class Api::V1::ReviewsController < ApiController
  skip_before_action :verify_authenticity_token
  def new
    review = Review.new
    render json: review
  end

  def create
    review = Review.new(review_params)
    review.rating.to_i
    review.user = current_user
    review.venue = Venue.find(params[:venue_id])
    if review.save
      render json: review
    else
      render json:
        { errors: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    reviews = Venue.find(params[:venue_id]).reviews
    render json: reviews
  end

  def show
    review = Review.find(params[:id])
    render json: review
  end

  def update
    review = Review.find(params[:id])
    review.update

    render json: review
  end

  private

  def review_params
    params.require(:review).permit(
      :rating,
      :review_text,
      :venue_id
    )
  end
end
