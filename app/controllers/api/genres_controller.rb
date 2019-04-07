class Api::GenresController < ApplicationController
    before_action :ensure_login
    
    def index 
        @sample = Genre.includes(:sample_movies)
        @genre_lists = Hash.new 
        @genre_names = Hash.new
        @my_watchlist = Hash.new
        @movies = []

        @sample.each do |genre|
            if genre.sample_movie_ids[0] 
            @genre_names[genre.id] = genre.name
                @genre_lists[genre.id] = genre.sample_movie_ids
                @movies += genre.sample_movies.with_attached_photo.with_attached_video
            end
        end
    
        @my_watchlist[0] = current_user.movie_ids
        if (@my_watchlist[0].size >= 1)
            
            @movies += Movie.with_attached_photo.with_attached_video.joins(:users).where(users: {id: current_user.id})
            @genre_names[0] = Genre.first.name
            @genre_lists[0] = @my_watchlist[0]
        end
     
        render :index
    end

    def show 
        unless movie_params && movie_params[:term]
            @movies = Movie.with_attached_photo.with_attached_video.joins(:genres).where(genres: {id: params[:id]})
        else 
            @movies = Movie.with_attached_photo.with_attached_video.where("title LIKE ?", "%#{movie_params[:term]}%").all 
        end
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
            @movies += Movie.with_attached_photo.with_attached_video.joins(:users).where(users: {id: current_user.id})
            @genre_names[0] = Genre.first.name
            @genre_lists[0] = @my_watchlist[0]
        end
        
        render :show
    end

    private 

    def movie_params 
      params.require(:movie).permit(:term) if params[:movie]
    end
 
end

