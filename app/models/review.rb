class Review < ApplicationRecord
    validates :user_id, :book_id, presence: true
    validates :body, presence: true

    belongs_to :book

    belongs_to :user
end