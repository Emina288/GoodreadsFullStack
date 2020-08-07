@books.each do |book|
  json.set! book.id do
    json.extract! book, :id, :title, :isbn, :author_id, :description, :gender, :writer, :bookshelves, :reviews, :reviewsUser
    begin
    json.book_url asset_path("/#{@book.book_url}")
    rescue
    json.book_url book.book_url
    end
  end
end