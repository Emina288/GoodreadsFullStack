@authors.each do |author|
  json.set! author.id do
    json.extract! author, :id, :name, :bio
  end
end