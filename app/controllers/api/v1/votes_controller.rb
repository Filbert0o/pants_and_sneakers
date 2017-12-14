class Api::V1::VotesController < ApplicationController
  skip_before_action :verify_authenticity_token
  # before_action :authenticate_user!, except: [:index, :show]
  def index
    votes = Vote.all
    render json: votes
  end

  def create
    vote = Vote.new(vote_params)
    user = current_user
    vote.user = user

    previous_value = Vote.find_by(user: vote.user, review: vote.review)
    if previous_value

      if previous_value.value == 1 && vote.value == 1
        previous_value.review.upvotes = previous_value.review.upvotes - 1
        previous_value.value = 0
        update_vote(previous_value)
      elsif previous_value.value == 1 && vote.value == -1
        previous_value.review.upvotes = previous_value.review.upvotes - 1
        previous_value.review.downvotes = previous_value.review.downvotes + 1
        previous_value.value = vote.value
        update_vote(previous_value)
      elsif previous_value.value == 0 && vote.value == 1
        previous_value.review.upvotes = previous_value.review.upvotes + 1
        previous_value.value = vote.value
        update_vote(previous_value)
      elsif previous_value.value == 0 && vote.value == -1
        previous_value.review.downvotes = previous_value.review.downvotes + 1
        previous_value.value = vote.value
        update_vote(previous_value)
      elsif previous_value.value == -1 && vote.value == -1
        previous_value.review.downvotes = previous_value.review.downvotes - 1
        previous_value.value = 0
        update_vote(previous_value)
      elsif previous_value.value == -1 && vote.value == 1
        previous_value.review.upvotes = previous_value.review.upvotes + 1
        previous_value.review.downvotes = previous_value.review.downvotes - 1
        previous_value.value = vote.value
        update_vote(previous_value)
      else
        render json: { error: vote.errors.full_messages }, status: :unprocessable_entity
      end
    else
      if vote.value == 1 && vote.save
        vote.review.upvotes = vote.review.upvotes + 1
        vote.review.save
        reviews = Venue.find(params[:venue_id]).reviews
        render json: reviews
      elsif vote.value == -1 && vote.save
        vote.review.downvotes = vote.review.downvotes + 1
        vote.review.save
        reviews = Venue.find(params[:venue_id]).reviews
        render json: reviews
      else
        render json: { error: vote.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end

  private

  def update_vote(update)
    update.save
    update.review.save
    reviews = Venue.find(params[:venue_id]).reviews
    render json: reviews
  end

  def vote_params
    params.require(:vote).permit(:value, :review_id)
  end
end
