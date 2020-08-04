class Review < ApplicationRecord
    validates :user_id, :book_id, presence: true
    validates :body, presence: true

    belongs_to :book,
    foreign_key: :book_id,
    class_name: :Book

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end