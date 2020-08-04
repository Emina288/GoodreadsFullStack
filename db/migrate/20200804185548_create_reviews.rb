class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :book_id, null: false 
      t.integer :user_id, null: false 
      t.string :body, null: false 
      t.integer :rating, null: false 

    end
    add_index :reviews, :book_id
    add_index :reviews, :user_id
  end
end
