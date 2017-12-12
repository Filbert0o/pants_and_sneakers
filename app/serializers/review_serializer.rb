class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review_text, :user, :upvotes, :downvotes, :created_at
end
