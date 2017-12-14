class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :review
  validates :review, presence: true
  validates :user, presence: true
  validates :value, presence: true
end
