class Bookshelf < ApplicationRecord
    validates :user_id, :title, presence: true

    belongs_to :user
 
    has_many :bookings,
    foreign_key: :bookshelf_id,
    class_name: :Booking

    has_many :books,
    through: :bookings,
    source: :book
end