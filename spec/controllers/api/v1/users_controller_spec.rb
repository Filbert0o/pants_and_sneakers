require 'rails_helper'

describe Api::V1::UsersController, type: :controller do
  let!(:first_user) do
    User.create!(
      first_name: 'John',
      last_name: 'John',
      email: 'gmail@gmail.com',
      password: 'test123',
      role: 'member'
    )
  end

  describe 'GET#index' do
    it 'should return a list of all the users' do
      get :index
      returned_json = JSON.parse(response.body)
      returned_json = returned_json['users']

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json.length).to eq 1
      expect(returned_json[0]['first_name']).to eq 'John'
      expect(returned_json[0]['last_name']).to eq 'John'
      expect(returned_json[0]['email']).to eq 'gmail@gmail.com'
      expect(returned_json[0]['password']).to eq nil
      expect(returned_json[0]['role']).to eq 'member'
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

  describe 'DELETE#destroy' do
    it 'should delete a user account' do
      @user = create(:user)
      @admin = create(:user, email: 'different@hotmail.com', role: 'admin')
      sign_in @admin

      expect {
        delete :destroy, params: { id: @user.id }
      }.to change(User, :count).by(-1)

      expect {
        User.find(@user.id)
      }.to raise_exception(ActiveRecord::RecordNotFound)
    end
  end
end
