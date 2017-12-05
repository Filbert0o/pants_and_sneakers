require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should have_valid(:rating).when(1,2,3,4,5) }
  it { should_not have_valid(:rating).when(nil, '') }

  # it 'has a user and a venue' do
  #   rev = Review.new(rating: 4)
  #   venue = Venue.new(name: 'Union Transfer')
  # end

end
