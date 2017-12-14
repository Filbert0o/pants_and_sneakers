require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_valid(:first_name).when('Joe', 'Jason') }
  it { should_not have_valid(:first_name).when(nil, '') }

  it { should have_valid(:last_name).when('Z', 'Pres') }
  it { should_not have_valid(:last_name).when(nil, '') }

  it { should have_valid(:email).when('Joe@yahoo.com', 'Jason@gmail.com') }
  it { should_not have_valid(:email).when(nil, '') }

  it { should have_valid(:password).when('pantsandsneakers', 'ilovecooking') }
  it { should_not have_valid(:password).when(nil, '') }

  it 'should display an error if any of the required fields are left blank' do
    user = User.new
    user.first_name = nil
    user.last_name = nil
    user.email = nil
    user.password = nil

    expect(user).to_not be_valid
    expect(user.errors[:first_name]).to_not be_blank
    expect(user.errors[:last_name]).to_not be_blank
    expect(user.errors[:email]).to_not be_blank
    expect(user.errors[:password]).to_not be_blank
  end

  feature 'profile photo' do
    scenario 'user uploads a profile photo' do
      visit root_path
      click_link 'Sign Up'

      fill_in 'First Name', with: 'jay'
      fill_in 'Last Name', with: 'money'
      fill_in 'Email', with: 'ash@s-mart.com'
      fill_in 'Password', with: 'boomstick!3vilisd3ad'
      fill_in 'Password Confirmation', with: 'boomstick!3vilisd3ad'
      attach_file 'Profile Photo', "#{Rails.root}/spec/support/avatar.png"
      click_button 'Sign up'

      expect(page).to have_css("img[src*='avatar.png']")
    end
  end
end
