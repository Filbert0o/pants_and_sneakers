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
    image_url: "https://slack-imgs.com/?c=1&url=http%3A%2F%2Finyourspeakers.com%2Ffiles%2Fimagecache%2Fgallery_full%2Fchromeo-2web.jpg"
  },
  {
    name: "The Fillmore",
    address: "29 East Allen Street",
    city: "Philadlephia",
    state: "PA",
    zip: "19123",
    image_url: "https://www.wheretraveler.com/sites/default/files/styles/promoted_image_social_large/public/The%20Fillmore%20Music%20Hall.jpg?itok=GR_E89B9"
  },
  {
    name: "The Trocadero",
    address: "1003 Arch Street",
    city: "Philadlephia",
    state: "PA",
    zip: "19107",
    image_url: "http://fast.clickbooq.com/4bbb00-380/HippieSabotageDB1-lg.jpg"
  },
  {
    name: "Tattoed Mom",
    address: "504 South St.",
    city: "Philadelphia",
    state: "PA",
    zip: "19101",
    image_url: "http://3.bp.blogspot.com/--QKLe18pNqI/UOSgbZ8jk6I/AAAAAAAAAqw/Rdk0m2s9RuQ/s1600/Home+Sweet+Home+Fan+Install.jpg"
  }
]

venues.each do |v|
  Venue.create(name: v[:name], address: v[:address], city: v[:city], state: v[:state], zip: v[:zip], image_url: v[:image_url])
end
