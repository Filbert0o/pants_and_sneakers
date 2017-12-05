require 'rails_helper'

describe Venue, type: :model do
  it { should have_valid(:name).when('Jonnys', 'Tattoed Moms') }
  it { should_not have_valid(:name).when(nil, '') }


  it { should have_valid(:address).when('321 jump st', '45 S 23rd st') }
  it { should_not have_valid(:address).when(nil, '') }


  it { should have_valid(:city).when('Philadelphia', 'New York') }
  it { should_not have_valid(:city).when(nil, '') }


  it { should have_valid(:state).when('Pa', 'NY') }
  it { should_not have_valid(:state).when(nil, '') }


  it { should have_valid(:zip).when('99999') }
  it { should_not have_valid(:zip).when(nil, '') }


  it 'should display an error if any of the required fields are left blank' do
    venue = Venue.new
    venue.name = nil
    venue.address = nil
    venue.city = nil
    venue.state = nil
    venue.zip = nil


    expect(venue).to_not be_valid
    expect(venue.errors[:name]).to_not be_blank
    expect(venue.errors[:address]).to_not be_blank
    expect(venue.errors[:city]).to_not be_blank
    expect(venue.errors[:state]).to_not be_blank
    expect(venue.errors[:zip]).to_not be_blank
  end





end
