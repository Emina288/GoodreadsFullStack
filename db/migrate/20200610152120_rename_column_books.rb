class RenameColumnBooks < ActiveRecord::Migration[5.2]
  def change
    rename_column :books, :author, :writer
  end
end
