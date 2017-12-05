require 'rails_helper'

feature 'reset password' do
  let!(:user) do
    User.create(
      first_name: 'John',
      last_name: 'Smith',
      email: 'john@firstenglishcolony.edu',
      password: 'pocahontas'
    )
  end

  scenario 'user clicks forgot password' do
    visit new_user_session_path
    click_link 'Forgot your password?'

    expect(current_path).to eq '/users/password/new'
  end

  scenario 'user resets password' do
    visit new_user_session_path
    click_link 'Forgot your password?'
    fill_in 'Email', with: 'john@firstenglishcolony.edu'
    click_button 'Send me reset password instructions'

    expect(current_path).to eq '/users/sign_in'
    expect(page).to have_content 'You will receive an email with instructions
     on how to reset your password in a few minutes.

'
  end
end
