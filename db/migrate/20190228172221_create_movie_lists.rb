class CreateMovieLists < ActiveRecord::Migration[5.2]
  def change
    create_table :movie_lists do |t|
      t.integer :movie_id, null: false 
      t.integer :genre_id, null: false
      t.timestamps
    end

    add_index :movie_lists, :movie_id
    add_index :movie_lists, :genre_id
  end
end
