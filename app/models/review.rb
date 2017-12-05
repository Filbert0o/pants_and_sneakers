class Review < ApplicationRecord
  belongs_to :venue
  # Reactivate once merged with add_devise branch:
  # belongs_to :user

  validates_presence_of :rating, :user_id, :venue_id

  validates :rating,
    numericality: true,
    inclusion: 1..5

end
