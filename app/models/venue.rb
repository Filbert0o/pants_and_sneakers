# This is the Venue model
class Venue < ApplicationRecord
  has_many :reviews

  validates_presence_of :name, :address, :city, :state, :zip
end
