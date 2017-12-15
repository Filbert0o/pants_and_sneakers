require 'rails_helper'

# RSpec.describe CreateVote, type: :model do
#   pending "add some examples to (or delete) #{__FILE__}"
# end
describe Vote, type: :model do
  it { should have_valid(:user_id).when(1, 2) }
  it { should_not have_valid(:user).when(nil) }

  it { should have_valid(:review_id).when(2, 1) }
  it { should_not have_valid(:review).when(nil) }

  it { should have_valid(:value).when(1, -1) }
  it { should_not have_valid(:value).when(nil) }
end
