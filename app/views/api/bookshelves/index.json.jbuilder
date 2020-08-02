@bookshelves.each do |bookshelf|
    json.set! bookshelf.id do
        json.extract! bookshelf, :id, :title, :user_id, :books_on_shelf
    end
end
