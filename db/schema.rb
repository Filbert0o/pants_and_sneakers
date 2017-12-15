# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171214190855) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reviews", force: :cascade do |t|
    t.integer "rating", null: false
    t.text "review_text"
    t.bigint "user_id", null: false
    t.bigint "venue_id", null: false
    t.integer "upvotes", default: 0, null: false
    t.integer "downvotes", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_reviews_on_user_id"
    t.index ["venue_id"], name: "index_reviews_on_venue_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "role", default: "member", null: false
    t.string "profile_photo"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "venues", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip", null: false
<<<<<<< HEAD
    t.string "website"
    t.string "age_restriction"
    t.string "food_options"
    t.string "parking"
    t.string "hours"
    t.string "phone"
    t.string "dress_code"
    t.string "cover_charge"
    t.string "cash_only"
||||||| merged common ancestors
    t.string "website"
    t.string "age_restriction"
    t.string "food_options"
    t.boolean "parking"
    t.string "hours"
    t.string "phone"
    t.string "dress_code"
    t.string "cover_charge"
    t.boolean "cash_only"
=======
    t.string "website", default: "", null: false
    t.string "age_restriction", default: "", null: false
    t.string "food_options", default: "", null: false
    t.boolean "parking"
    t.string "hours", default: "", null: false
    t.string "phone", default: "", null: false
    t.string "dress_code", default: "", null: false
    t.string "cover_charge", default: "", null: false
    t.boolean "cash_only"
>>>>>>> 475e325ebcb9b66ba723192eaf6cf26268c0c0f9
    t.string "image_url", default: "../../assets/image/default_venue_photo.jpg", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "votes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "review_id", null: false
    t.integer "value", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_votes_on_review_id"
    t.index ["user_id", "review_id"], name: "index_votes_on_user_id_and_review_id", unique: true
    t.index ["user_id"], name: "index_votes_on_user_id"
  end

end
