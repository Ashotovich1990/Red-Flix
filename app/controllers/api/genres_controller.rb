class Api::GenresController < ApplicationController
    before_action :ensure_login
    
    def index 
        @sample = Genre.includes(:sample_movies)
        # @sample = Genre.includes(sample_movies: :actors)
        @genre_lists = Hash.new 
        @genre_names = Hash.new
        @my_watchlist = Hash.new
        @movies = []
        @sample.each do |genre|
            # @genre_lists[genre.id] ||= []
            if genre.sample_movie_ids[0] 
            @genre_names[genre.id] = genre.name
            # genre.sample_movies.each do |movie|
                @genre_lists[genre.id] = genre.sample_movie_ids
                @movies += genre.sample_movies
            # end
            end
        end
        
        @my_watchlist[0] = current_user.movie_ids
        if (@my_watchlist[0].size >= 1)
            @movies += current_user.movies
            @genre_names[0] = Genre.first.name
            @genre_lists[0] = @my_watchlist[0]
        end

        render :index
    end

    def show 
        @movies = Movie.with_attached_photo.with_attached_video.joins(:genres).where(genres: {id: params[:id]})
        @genre_lists = Hash.new
        @genre_names = Hash.new
        @my_watchlist = Hash.new
        
        @movie_ids = @movies.map {|el| el.id}
        if @movies
          @sample = MovieList.includes(:genre).where( movie_id: @movie_ids)
          @sample.each do |movie_list|
            @genre_names[movie_list.genre.id] = movie_list.genre.name
            @genre_lists[movie_list.genre.id] ||= []
            @genre_lists[movie_list.genre.id] += [movie_list.movie_id]
          end
        end

        @my_watchlist[0] = current_user.movie_ids
        if (!@my_watchlist.empty?)
            @movies += current_user.movies
            @genre_names[0] = Genre.first.name
            @genre_lists[0] = @my_watchlist[0]
        end
        
        render :show
    end
 
end

