require 'rails_helper'

describe Api::V1::VenuesController, type: :controller do
  # let!(:first_venue) do
  #   Venue.create(
  #     name: 'Jonnys',
  #     address: '123 main st.',
  #     city: 'Philadelphia',
  #     state: 'PA',
  #     zip: '19103'
  #   )
  # end
  let!(:first_venue) {create(:venue)}

  let!(:second_venue) do
    Venue.create(
      name: 'Electric',
      address: '234 main st.',
      city: 'Manhattan',
      state: 'NY',
      zip: '10018'
    )
  end



  describe 'GET#index' do
    it 'should return a list of all the venues' do
      get :index
      returned_json = JSON.parse(response.body)
      returned_json = returned_json['venues']

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json.length).to eq 2
      expect(returned_json[0]['name']).to eq 'Union Transfer'
      expect(returned_json[0]['address']).to eq '1101 Spring Garden St'
      expect(returned_json[0]['city']).to eq 'Philadelphia'
      expect(returned_json[0]['state']).to eq 'PA'
      expect(returned_json[0]['zip']).to eq '19123'

      expect(returned_json[1]['name']).to eq 'Electric'
      expect(returned_json[1]['address']).to eq '234 main st.'
      expect(returned_json[1]['city']).to eq 'Manhattan'
      expect(returned_json[1]['state']).to eq 'NY'
      expect(returned_json[1]['zip']).to eq '10018'
    end
  end

  describe 'GET#index' do
    it 'should return current user' do
      get :index
      returned_json = JSON.parse(response.body)
      returned_json = returned_json['current_user']

      expect(returned_json).to eq nil
    end
  end

  describe 'GET#show' do

    before do
      get :show, params: {id: first_venue.id}
      @body = JSON.parse(response.body)
    end

    it 'should return json for one venue as a hash' do
      expect(@body.class).to eq(Hash)

      expect(@body['name']).to eq 'Union Transfer'
      expect(@body['address']).to eq '1101 Spring Garden St'
      expect(@body['city']).to eq 'Philadelphia'
      expect(@body['state']).to eq 'PA'
      expect(@body['zip']).to eq '19123'

    end

    it 'should return an array of reviews in a key :reviews' do
      expect(@body['reviews']).to be_truthy
      expect(@body['reviews'].class).to eq(Array)
    end
  end
end
