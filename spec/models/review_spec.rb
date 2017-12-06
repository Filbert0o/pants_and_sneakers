require 'rails_helper'

RSpec.describe Review, type: :model do
  FactoryBot.find_definitions

  it { should have_valid(:rating).when(1, 2, 3, 4, 5) }
  it { should_not have_valid(:rating).when(nil, '') }

  it 'has a user and a venue' do
    review = create(:review)

    expect(review.user).to be_truthy
    expect(review.user.first_name).to eq('John')

    expect(review.venue).to be_truthy
    expect(review.venue.name).to eq('Union Transfer')
  end
end
