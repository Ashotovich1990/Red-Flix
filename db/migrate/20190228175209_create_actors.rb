class CreateActors < ActiveRecord::Migration[5.2]
  def change
    create_table :actors do |t|
      t.string :first_name, null: false 
      t.string :last_name, null: false 
      t.timestamps
    end
  end
end
