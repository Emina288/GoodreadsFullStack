# == Schema Information
#
# Table name: books
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  isbn        :integer          not null
#  author_id   :integer          not null
#  description :string           not null
#  gender      :string           not null
#  book_url    :string           not null
#
class Book < ApplicationRecord 
    validates :isbn, presence: true, uniqueness: true
    validates :title, :author_id, :description, :gender, :book_url, presence: true 

    
    belongs_to :author 
   
    has_many :books_and_user

    has_many :users, through: :books_and_user
end