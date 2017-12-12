class VenueSerializer < ActiveModel::Serializer
  attributes  :id,
              :name,
              :address,
              :city,
              :state,
              :zip,
              :website,
              :age_restriction,
              :food_options,
              :parking,
              :hours,
              :phone,
              :dress_code,
              :cover_charge,
              :cash_only,
              :image_url
  has_many :reviews
end
