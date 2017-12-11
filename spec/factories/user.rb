FactoryBot.define do
  factory :user do
    first_name 'John'
    last_name  'Smith'
    email 'john@firstenglishcolony.edu'
    password 'pocahontas'
    role 'member'
  end
end
