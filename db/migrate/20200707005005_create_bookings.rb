class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :book_id, null: false 
      t.integer :bookshelf_id, null: false 

       t.timestamps
    end
   add_index :bookings, :book_id
   add_index :bookings, :bookshelf_id
  end
end
