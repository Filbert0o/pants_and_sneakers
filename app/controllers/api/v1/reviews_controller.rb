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
    venue = Venue.find(params[:venue_id])
    review.venue = venue
    binding.pry
    if review.save
      render json: review
    else
      render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
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
