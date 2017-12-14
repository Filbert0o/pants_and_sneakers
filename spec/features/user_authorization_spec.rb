require 'rails_helper'

feature 'User Authentication' do
  scenario 'unregistered user tried to view venue form' do
    visit '/venues/new'
    expect(current_path).to eq('/users/sign_in')
  end

  scenario 'registered user tries to view venue form' do
    user = create(:user)
    login_as(user)

    visit '/venues/new'
    expect(current_path).to eq('/venues/new')
  end

  scenario 'non-admin tries to view all users page' do
    user = create(:user)
    login_as(user)

    visit '/admin/users'
    expect(current_path).to eq('/404')
  end

  scenario 'admin tries to view all users page' do
    user = create(:user, role: 'admin')
    login_as(user)

    visit '/admin/users'
    expect(current_path).to eq('/admin/users')
  end
end
