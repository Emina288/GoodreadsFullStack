@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :book_id, :bookshelf_id
  end
end