class CreateCastings < ActiveRecord::Migration[5.2]
  def change
    create_table :castings do |t|
      t.integer :movie_id, null: false 
      t.integer :actor_id, null: false
      t.integer :ord, null: false
      t.timestamps
    end

    add_index :castings, :movie_id
    add_index :castings, :actor_id
  end
end
