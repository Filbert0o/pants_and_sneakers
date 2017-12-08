
feature 'Edit Account' do
  scenario 'user edits their account' do
    user = User.create(
      first_name: 'John',
      last_name: 'Smith',
      email: 'john@firstenglishcolony.edu',
      password: 'pocahontas'
    )

    login_as(user, scope: :user)

    visit edit_user_registration_path

    expect(page).to have_content 'Edit'
    expect(find_field('First Name').value).to eq 'John'
    expect(find_field('Last Name').value).to eq 'Smith'
    expect(find_field('Email').value).to eq 'john@firstenglishcolony.edu'
  end
end
