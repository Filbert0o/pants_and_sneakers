require 'rails_helper'

describe Api::V1::VenuesController, type: :controller do
  let!(:first_venue) do
    Venue.create(
      name: 'Jonnys',
      address: '123 main st.',
      city: 'Philadelphia',
      state: 'PA',
      zip: '19103'
    )
  end
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
      expect(returned_json[0]['name']).to eq 'Jonnys'
      expect(returned_json[0]['address']).to eq '123 main st.'
      expect(returned_json[0]['city']).to eq 'Philadelphia'
      expect(returned_json[0]['state']).to eq 'PA'
      expect(returned_json[0]['zip']).to eq '19103'

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
end
