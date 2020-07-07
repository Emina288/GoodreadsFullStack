class Booking < ApplicationRecord
    validates :bookshelf_id, :book_id, presence: true
    validates :book_id, uniqueness: {scope: :bookshelf_id}

    belongs_to :bookshelf,
    foreign_key: :bookshelf_id,
    class_name: :Bookshelf

    belongs_to :book,
    foreign_key: :book_id,
    class_name: :Book

end