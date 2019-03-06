

    json.movies do 
     @movies.each do |movie| 
            json.set! movie.id do
              json.extract! movie, :id, :title, :description, :year, :maturity_rating
            
        
            if movie.photo.attached?
                json.poster url_for(movie.photo)
            end

            if movie.video.attached?
            json.video url_for(movie.video)
            end
            
            end
      end
         
    end
    
    json.movieIds @movie_ids
    
    json.genreLists @genre_lists

    json.genreNames @genre_names

    json.myList @my_watchlist