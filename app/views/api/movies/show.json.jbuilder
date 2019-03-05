
    json.extract! @movie, :id, :title, :description, :year, :maturity_rating
    if @movie.photo.attached?
        json.poster url_for(@movie.photo)
    end

     if @movie.video.attached?
        json.video url_for(@movie.video)
     end

