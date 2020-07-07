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

ActiveRecord::Schema.define(version: 2020_07_06_201834) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authors", force: :cascade do |t|
    t.string "name", null: false
    t.text "bio", null: false
  end

  create_table "books", force: :cascade do |t|
    t.string "title", null: false
    t.string "isbn", null: false
    t.integer "author_id", null: false
    t.string "description", null: false
    t.string "gender", null: false
    t.string "book_url", null: false
    t.string "writer"
    t.index ["author_id"], name: "index_books_on_author_id"
    t.index ["isbn"], name: "index_books_on_isbn", unique: true
    t.index ["title"], name: "index_books_on_title"
  end

  create_table "books_and_users", force: :cascade do |t|
    t.integer "book_id", null: false
    t.integer "user_id", null: false
    t.string "status", null: false
    t.index ["book_id"], name: "index_books_and_users_on_book_id"
    t.index ["user_id"], name: "index_books_and_users_on_user_id"
  end

  create_table "bookshelves", force: :cascade do |t|
    t.string "title", null: false
    t.integer "user_id", null: false
    t.index ["user_id"], name: "index_bookshelves_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
