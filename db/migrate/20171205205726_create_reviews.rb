class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer     :rating,    null: false
      t.text        :review_text
      t.references  :user,      null: false
      t.references  :venue,     null: false
      t.integer     :upvotes,   null: false, default: 0
      t.integer     :downvotes, null: false, default: 0
      
      t.timestamps
    end
  end
end
