class EditReviewsTable < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :body, :string 
  end
end
