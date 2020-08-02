json.set! @booking do
  json.extract! @booking, :id, :bookshelf_id, :book_id
end