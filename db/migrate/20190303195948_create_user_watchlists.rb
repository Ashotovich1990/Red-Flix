class CreateUserWatchlists < ActiveRecord::Migration[5.2]
  def change
    create_table :user_watchlists do |t|
      t.integer :user_id, null: false 
      t.integer :movie_id, null: false 
      t.timestamps
    end

    add_index :user_watchlists, :user_id
    add_index :user_watchlists, :movie_id
  end
end
