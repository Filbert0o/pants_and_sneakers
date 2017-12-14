require 'rails_helper'
require 'json'
describe Api::V1::VotesController, type: :controller do
  let!(:first_vote) do
    Vote.create(
      user_id: 1,
      review_id: 1,
      value: 0
    )
  end

  describe 'POST#create' do
    it 'should return a list of all the votes' do
      @user = User.create(
        first_name: 'Please',
        last_name: 'Work',
        email: 'gmail@gmail.com',
        password: '123456789',
        role: 'member'
      )
      @venue = create(:venue)
      @review = create(:review)

      data = {
        vote: {
          user_id: 2,
          review_id: 2,
          value: 1
        },
        venue: {
          id: 1
        }
      }


      expect { post :create, params: data }.to change(Vote, :count).by(0)


    end
  end
end
