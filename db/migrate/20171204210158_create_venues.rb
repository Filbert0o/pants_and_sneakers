class CreateVenues < ActiveRecord::Migration[5.1]
  def change
    create_table :venues do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :website
      t.string :age_restriction
      t.string :food_options
      t.boolean :parking
      t.string :hours
      t.string :phone
      t.string :dress_code
      t.string :cover_charge
      t.boolean :cash_only
      t.string :image_url, null: false, default: '../../assets/image/default_venue_photo.jpg'

      t.timestamps
    end
  end
end
