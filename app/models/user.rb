# user model generated from devise
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :reviews
  has_many :votes

  validates_presence_of :first_name, :last_name, :role

  def admin?
    role == 'admin'
  end
end
