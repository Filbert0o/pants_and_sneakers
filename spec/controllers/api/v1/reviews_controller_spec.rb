require 'rails_helper'

describe Api::V1::ReviewsController, type: :controller do
  describe 'POST#create' do
    it 'should create a new venue', focus: true do
      @user = create(:user)
      sign_in @user

      @venue = create(:venue)

      data = {
        review: {
          rating: "5",
          review_text: "So good"
        },
        venue_id: @venue.id
      }

      expect{
        post :create, params: data
      }.to change(Review, :count).by(1)

      expect(Review.last.review_text).to eq("So good")

    end
  end
end
