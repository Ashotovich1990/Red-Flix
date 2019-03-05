class Api::MoviesController < ApplicationController
    # def index 
    #     # if params.has_key?(:genre_id)
    #     #   @movies = Movie.joins(:genres).where(genres: {id: params[:genre_id]})
        
    #     #   movie_ids = @movies.ids
    #     #   @genres = Genre.joins(:movie_lists).where(movie_lists: { movie_id: movie_ids})

    #     # else
    #     #   @movies = Movie.all
    #     #   @genres = Genre.all
    #     # end  
    #     # render :index
    # end

    def show 
        @movie = Movie.find_by(id: params[:id])
        render :show
    end

    def create 
        user_id = current_user.id 
      
        movie_id = movie_params[:id]
        
        movieListItem = UserWatchlist.new(user_id: user_id, movie_id: movie_id)

        if movieListItem.save 
            @movie = movieListItem.movie
            render :show
        else 
            nil
        end
    end


    def destroy 
        movieListItem = UserWatchlist.select('*').where(user_id: current_user.id, movie_id: params[:id])
        movieListItem ? movieListItem.destroy_all : nil
    end
    
    private 
    def movie_params 
      params.require(:movie).permit(:id)
    end

end
