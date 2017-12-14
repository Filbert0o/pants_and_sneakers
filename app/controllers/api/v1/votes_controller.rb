class Api::V1::VotesController < ApplicationController
  skip_before_action :verify_authenticity_token
  # before_action :authenticate_user!, except: [:index, :show]

  def index
    vote = Vote.all
    render json: votes
  end
  def create
    vote = Vote.new(vote_params)
    user = current_user
    vote.user = user

    if vote_params.value == 1 && vote.save
      vote.review.upvotes = vote.review.upvotes + 1
      # vote.value = 1
      # vote.save
      vote.review.save
      reviews = Venue.find(params[:venue_id]).reviews.reverse
      render json: { reviews: reviews }
    elsif vote_params.value == -1 && vote.save
      vote.review.downvotes = vote.review.downvotes + 1
      # vote.value = 2
      # vote.save
      vote.review.save
      reviews = Venue.find(params[:venue_id]).reviews.reverse
      render json: { reviews: reviews }
    else
      render json: { error: vote.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    # vote = Vote.find(params[:id])
    vote = Vote.where('user = ? AND review = ?', vote.user, vote.review)
    if vote.value == 1 && vote.update(vote_params)
      vote.review.upvotes = vote.review.upvotes + 1
      vote.review.update
      reviews = Venue.find(params[:venue_id]).reviews.reverse
      render json: { reviews: reviews }
    elsif vote.value == -1 && vote.update(vote_params)
      vote.review.downvotes = vote.review.downvotes + 1
      vote.review.update
      reviews = Venue.find(params[:venue_id]).reviews.reverse
      render json: { reviews: reviews }
    else
      render json: { error: vote.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:value, :review)
  end
end
