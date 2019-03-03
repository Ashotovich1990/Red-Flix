class Genre < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :movie_lists,
    primary_key: :id,
    foreign_key: :genre_id,
    class_name: :MovieList

    has_many :sample_movie_lists, -> {where sample: true},
    class_name: :MovieList

    has_many :sample_movies,
    through: :sample_movie_lists,
    source: :movie

    has_many :movies,
    through: :movie_lists,
    source: :movie
end