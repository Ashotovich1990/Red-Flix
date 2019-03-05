class Movie < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :description, :year, :maturity_rating, presence: true
    
    has_many :watchlist_items,
    primary_key: :id,
    foreign_key: :movie_id,
    class_name: :UserWatchlist

    has_many :users,
    through: :watchlist_items,
    source: :user

    has_many :movie_lists,
    primary_key: :id, 
    foreign_key: :movie_id,
    class_name: :MovieList

    has_many :genres,
    through: :movie_lists,
    source: :genre
    
    has_many :castings,
    primary_key: :id,
    foreign_key: :movie_id,
    class_name: :Casting

    has_many :actors,
    through: :castings,
    source: :actor

    has_one_attached :photo 

    has_one_attached :video

end
