# I am a votes Migration
class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.references :user,   null: false
      t.references :review, null: false
      t.integer    :value,  null: false, default: 0

      t.timestamps
    end
  end
end
