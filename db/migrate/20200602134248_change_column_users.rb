class ChangeColumnUsers < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :email_address, :email;
  end
end
