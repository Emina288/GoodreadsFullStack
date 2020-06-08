class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.integer :isbn, null: false
      t.integer :author_id, null: false
      t.string :description, null: false 
      t.string :gender, null: false 
      t.string :book_url, null: false 
    end
    add_index :books, :title
    add_index :books, :isbn, unique: true
    add_index :books, :author_id
  end
end
