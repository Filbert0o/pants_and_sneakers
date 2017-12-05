require 'rails_helper'

feature "user logs in to account" do

  let!(:user) do
    User.create(first_name: "John",
      last_name: "Smith",
      email: "john@firstenglishcolony.edu",
      password: "pocahontas")
    end

  scenario "user successfully logs in to account" do

    visit new_user_session_path

    fill_in 'Email', with: "john@firstenglishcolony.edu"
    fill_in 'Password', with: "pocahontas"

    click_button 'Log in'

    expect(current_path).to eq '/'
  end

  scenario "user unsuccessfully logs in to account" do

    visit new_user_session_path

    click_button 'Log in'

    expect(current_path).to eq '/users/sign_in'
  end
end
