class Actor < ApplicationRecord
    validates :first_name, :last_name, presence: true

    has_many :castings,
    primary_key: :id,
    foreign_key: :actor_id,
    class_name: :Casting

    has_many :movies,
    through: :castings,
    source: :movie

end
