# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Venue.destroy_all

venues = [
  {
    name: "Union Transfer",
    address: "1101 Spring Garden St",
    city: "Philadelphia",
    state: "PA",
    zip: "19123",
    website: "www.utphilly.com",
    age_restriction: "21+",
    food_options: "Limited Menu",
    parking: true,
    hours: "Wheneva!",
    phone: "215-232-2100",
    dress_code: "Come as you are!",
    cover_charge: "YES",
    cash_only: false,
    image_url: "https://slack-imgs.com/?c=1&url=http%3A%2F%2Finyourspeakers.com%2Ffiles%2Fimagecache%2Fgallery_full%2Fchromeo-2web.jpg"
  },
  {
    name: "The Fillmore",
    address: "29 East Allen Street",
    city: "Philadlephia",
    state: "PA",
    zip: "19123",
    website: "www.thefillmorephilly.com/",
    age_restriction: "21+",
    food_options: "Limited Menu",
    parking: true,
    hours: "Late, and then early!",
    phone: "215-309-0150",
    dress_code: "Casual!",
    cover_charge: "YES",
    cash_only: false,
    image_url: "https://www.wheretraveler.com/sites/default/files/styles/promoted_image_social_large/public/The%20Fillmore%20Music%20Hall.jpg?itok=GR_E89B9"
  },
  {
    name: "The Trocadero",
    address: "1003 Arch Street",
    city: "Philadlephia",
    state: "PA",
    zip: "19107",
    website: "www.thetroc.com",
    age_restriction: "21+",
    food_options: "None",
    parking: true,
    hours: "Vampire hours!",
    phone: "215-922-6888",
    dress_code: "Scuzzy!",
    cover_charge: "YES",
    cash_only: false,
    image_url: "http://fast.clickbooq.com/4bbb00-380/HippieSabotageDB1-lg.jpg"
  },
  {
    name: "Tattooed Mom",
    address: "504 South St.",
    city: "Philadelphia",
    state: "PA",
    zip: "19101",
    website: "www.tattooedmomphilly.com",
    age_restriction: "21+",
    food_options: "Limited Menu",
    parking: true,
    hours: "All dang day...!",
    phone: "215-238-9880",
    dress_code: "Come as you are!",
    cover_charge: "Depends",
    cash_only: false,
    image_url: "http://3.bp.blogspot.com/--QKLe18pNqI/UOSgbZ8jk6I/AAAAAAAAAqw/Rdk0m2s9RuQ/s1600/Home+Sweet+Home+Fan+Install.jpg"
  }
]

venues.each do |v|
  Venue.create(
    name: v[:name],
    address: v[:address],
    city: v[:city],
    state: v[:state],
    zip: v[:zip],
    website: v[:website],
    age_restriction: v[:age_restriction],
    food_options: v[:food_options],
    parking: v[:parking],
    hours: v[:hours],
    phone: v[:phone],
    dress_code: v[:dress_code],
    cover_charge: v[:cover_charge],
    cash_only: v[:cash_only],
    image_url: v[:image_url])
end
