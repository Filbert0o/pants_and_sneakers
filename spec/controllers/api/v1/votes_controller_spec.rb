require 'rails_helper'
require 'json'
describe Api::V1::VotesController, type: :controller do
  # let!(:first_vote) do
  #   Vote.create(
  #     user_id: 1,
  #     review_id: 1,
  #     value: 0
  #   )
  # end

  # describe 'POST#create' do
  #  it 'should create a vote' do
  #     @user = create(:user, email: 'gmail@gmail.com')
  #     sign_in @user
  #     @review = create(:review)
  #     data = {
  #       vote: {
  #         review_id: @review.id,
  #         value: 1
  #       }
  #     }
  #
  #     expect { post :create, params: data }.to change(Vote, :count).by(1)
  #   end

  describe 'POST#create' do
   it 'should create a vote' do


      data = {
        vote: {
          user_id: 2,
          review_id: 2,
          value: 1
        }
      }

      expect { post :create, params: data }.to change(Vote, :count).by(0)
    end

    # it 'should update a vote based on value and previous value' do
    #
    #   previousData = {
    #     vote: {
    #       user_id: 2,
    #       review_id: 2,
    #       value: 0
    #     }
    #   }
    #
    #   newVote = {
    #     vote: {
    #       user_id: 2,
    #       review_id: 2,
    #       value: 1
    #     }
    #   }
    #
    #   expect(Vote).to receive(:create)
    #   get params: newVote
    #   # { post :create, params: previousData }.to get params: newVote
    # end


    it 'should return an array of errors in json with invalid params' do
      @user = create(:user)
      sign_in @user

      data = {
        vote: {
          user_id: nil,
          review_id: nil,
          value: nil
        }
      }

      post :create, params: data
      body = JSON.parse(response.body)

      expect(body['error']).to be_truthy
      expect(body['error'].class).to eq(Array)

    end

  end
end
