class MovieList < ApplicationRecord
    validates :movie_id, :genre_id, presence: true
    validates_uniqueness_of :genre_id, scope: [:movie_id]

    belongs_to :movie,
    primary_key: :id,
    foreign_key: :movie_id,
    class_name: :Movie

    belongs_to :genre,
    primary_key: :id, 
    foreign_key: :genre_id,
    class_name: :Genre
end
