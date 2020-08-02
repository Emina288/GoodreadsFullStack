json.bookshelf do
  json.extract! @bookshelf, :id, :title, :user_id, :books_on_shelf
end