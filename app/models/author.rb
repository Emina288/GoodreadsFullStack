# == Schema Information
#
# Table name: authors
#
#  id   :bigint           not null, primary key
#  name :string           not null
#  bio  :text             not null
#
class Author < ApplicationRecord
    validates :name, :bio, presence: true 

    has_many :books,
    foreign_key: :author_id, 
    primary_key: :id,
    class_name: :Book
     
end 
