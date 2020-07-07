class ChangeColumnBookings < ActiveRecord::Migration[5.2]
  def change
     change_column :bookshelves, :title, :string 
  end
end
