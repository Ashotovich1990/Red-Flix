
json.set! @movie.id do
    json.extract! @movie, :id, :title, :description, :year, :maturity_rating
end
