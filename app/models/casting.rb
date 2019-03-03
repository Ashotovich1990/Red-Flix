class Casting < ApplicationRecord
    validates :movie_id, :actor_id, :ord, presence: true
    validates_uniqueness_of :movie_id, scope: [:ord, :actor_id]

    belongs_to :movie, 
    primary_key: :id,
    foreign_key: :movie_id,
    class_name: :Movie

    belongs_to :actor,
    primary_key: :id,
    foreign_key: :actor_id,
    class_name: :Actor
end
