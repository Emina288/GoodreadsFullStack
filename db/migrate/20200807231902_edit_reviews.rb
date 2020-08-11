class EditReviews < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :body, :string, null: true 
  end
end
