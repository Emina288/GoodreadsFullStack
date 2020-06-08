class CreateBooksAndUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :books_and_users do |t|
      t.integer :book_id, null: false 
      t.integer :user_id, null: false 
      t.string :status, null: false 
    end
    add_index :books_and_users, :book_id
    add_index :books_and_users, :user_id
  end
end
