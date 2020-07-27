@bookshelves.each do |bookshelf|
    json.set! bookshelf.id do
        json.extract! bookshelf, :id, :title, :user_id
        begin
        json.bookself_url asset_path("/#{@bookshelf.bookshelf_url}")
        rescue
        json.bookshelf_url bookshelf.bookshelf_url
    end
  end 
end
