# This is the Venue model
class Venue < ApplicationRecord
  validates_presence_of :name, :address, :city, :state, :zip
end
