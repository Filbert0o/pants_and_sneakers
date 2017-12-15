class ChangeVenueDefaults < ActiveRecord::Migration[5.1]
  def change
    change_column_null(:venues, :website, false)
    change_column_default(:venues, :website, '')

    change_column_null(:venues, :age_restriction, false)
    change_column_default(:venues, :age_restriction, '')

    change_column_null(:venues, :food_options, false)
    change_column_default(:venues, :food_options, '')

    change_column_null(:venues, :hours, false)
    change_column_default(:venues, :hours, '')

    change_column_null(:venues, :phone, false)
    change_column_default(:venues, :phone, '')

    change_column_null(:venues, :dress_code, false)
    change_column_default(:venues, :dress_code, '')

    change_column_null(:venues, :cover_charge, false)
    change_column_default(:venues, :cover_charge, '')
  end
end
