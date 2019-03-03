
    json.movies do
        @movies.each do |movie| 
            json.set! movie.id do
            json.extract! movie, :id, :title, :description, :year, :maturity_rating
            
            if movie.photo.attached?
            json.poster url_for(movie.photo)
            end

            end
        end
    end

    json.genreLists @genre_lists

    json.genreNames @genre_names
    


