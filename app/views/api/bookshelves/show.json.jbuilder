json.bookshelf do
  json.extract! @bookshelf, :id, :title, :user_id
  begin
    json.bookshelf_url asset_path("/#{@bookshelf.bookshelf_url}")
  rescue
    json.bookshelf_url @bookshelf.bookshelf_url
  end
end