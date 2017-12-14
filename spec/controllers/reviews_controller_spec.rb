require 'rails_helper'

describe ReviewsController, type: :controller do
  it 'should have a new method' do
    venue = create(:venue)
    get :new, params: { venue_id: venue.id }
    assert_response :success
  end
end
