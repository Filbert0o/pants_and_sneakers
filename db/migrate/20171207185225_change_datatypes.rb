class ChangeDatatypes < ActiveRecord::Migration[5.1]
  def reversible
    change_column :venues, :parking, :string
    change_column :venues, :cash_only, :string
  end
end
