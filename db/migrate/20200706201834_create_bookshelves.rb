class CreateBookshelves < ActiveRecord::Migration[5.2]
  def change
    create_table :bookshelves do |t|
      t.integer :title, null: false 
      t.integer :user_id, null: false 

       t.timestamps
    end
   add_index :bookshelves, :user_id
  end
end
