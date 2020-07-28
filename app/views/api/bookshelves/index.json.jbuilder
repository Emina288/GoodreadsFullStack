@bookshelves.each do |bookshelf|
    json.set! bookshelf.id do
        json.extract! bookshelf, :id, :title, :user_id
    end
end
