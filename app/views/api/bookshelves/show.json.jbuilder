json.bookshelf do
  json.extract! @bookshelf, :id, :title, :user_id
end