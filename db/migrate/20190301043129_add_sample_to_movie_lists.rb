class AddSampleToMovieLists < ActiveRecord::Migration[5.2]
  def change
    add_column :movie_lists, :sample, :boolean
  end
end
