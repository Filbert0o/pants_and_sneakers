# Review Model
class Review < ApplicationRecord
  belongs_to :venue
  belongs_to :user

  validates_presence_of :rating, :user_id, :venue_id

  validates :rating,
            numericality: true,
            inclusion: 1..5
end
