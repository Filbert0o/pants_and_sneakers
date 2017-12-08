require 'rails_helper'

feature 'visitor registers as new user' do
  scenario 'user sees sign up button on home page' do
    visit root_path

    expect(page).to have_content 'Sign Up'
  end

  scenario 'user sees sign in button on home page' do
    visit root_path

    expect(page).to have_content 'Sign In'
  end

  scenario 'user sucessfully fills out registration form' do
    visit root_path

    click_link 'Sign Up'

    fill_in 'First Name', with: 'John'
    fill_in 'Last Name', with: 'Smith'
    fill_in 'Email', with: 'john@firstenglishcolony.edu'
    fill_in 'Password', with: 'pocahontas'
    fill_in 'Password Confirmation', with: 'pocahontas'

    click_button 'Sign up'

    expect(current_path).to eq '/'
  end

  scenario 'user unsucessfully fills out registration form' do
    visit root_path
    click_link 'Sign Up'

    click_button 'Sign up'

    expect(page).to have_content "Email can't be blank"
    expect(page).to have_content "Password can't be blank"
    expect(page).to have_content "First name can't be blank"
    expect(page).to have_content "Last name can't be blank"
  end

  scenario 'user does not see sign in/sign out buttons when signed in' do
    user = create(:user)

    login_as(user, scope: :user)
    visit root_path

    expect(page).to_not have_content 'Sign In'
    expect(page).to_not have_content 'Sign Up'
    expect(page).to have_content 'Sign Out'
  end
end
