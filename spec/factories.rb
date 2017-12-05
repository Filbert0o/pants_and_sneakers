FactoryBot.define do
  factory :user do
    first_name 'John'
    last_name  'Smith'
    email 'john@firstenglishcolony.edu'
    password 'pocahontas'
  end

  factory :venue do
    name 'Union Transfer'
    address '1101 Spring Garden St'
    city 'Philadelphia'
    state 'PA'
    zip '19123'

    # factory :venue_with_reviews do
    #   transient do
    #     review_count 3
    #   end
    #   after(:create) do |venue, evaluator|
    #     create_list(:review, evaluator.review_count, venue: venue, user: User.first)
    #   end
    # end
  end

  factory :review do
    rating 4
    user
    venue
  end
end
