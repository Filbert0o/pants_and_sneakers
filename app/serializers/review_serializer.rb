class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review_text, :upvotes, :downvotes, :created_at, :user
  belongs_to :venue
end
