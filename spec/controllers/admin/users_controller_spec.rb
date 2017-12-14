require 'rails_helper'

describe Admin::UsersController, type: :controller do
  describe '#index' do
    it 'should render the admin/index template' do
      admin = create(:user, role: 'admin')
      sign_in admin
      get :index
      assert_response :success
    end
  end
end
