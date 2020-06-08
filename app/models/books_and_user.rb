# == Schema Information
#
# Table name: books_and_users
#
#  id      :bigint           not null, primary key
#  book_id :integer          not null
#  user_id :integer          not null
#  status  :string           not null
#
class BooksAndUser < ApplicationRecord 
    belongs_to :book 

    belongs_to :user 

end
