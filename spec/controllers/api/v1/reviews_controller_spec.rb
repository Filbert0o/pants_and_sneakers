require 'rails_helper'

describe Api::V1::ReviewsController, type: :controller do
  describe 'POST#create' do
    it 'should create a new venue with valid params' do
      @user = create(:user)
      sign_in @user

      @venue = create(:venue)

      data = {
        review: {
          rating: '5',
          review_text: 'So good'
        },
        venue_id: @venue.id
      }

      expect { post :create, params: data }.to change(Review, :count).by(1)

      expect(Review.last.review_text).to eq('So good')
    end

    it 'should return an array of errors with invalid params' do
      @user = create(:user)
      sign_in @user

      @venue = create(:venue)

      data = {
        review: {
          rating: '',
          review_text: ''
        },
        venue_id: @venue.id
      }

      post :create, params: data
      body = JSON.parse(response.body)

      expect(body['errors']).to be_truthy
      expect(body['errors'].class).to eq(Array)

      expect(body['errors']).to include("Rating can't be blank")
      expect(body['errors']).to include("Rating is not a number")
      expect(body['errors']).to include("Rating is not included in the list")
    end
  end
end
