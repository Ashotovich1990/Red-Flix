class Api::MoviesController < ApplicationController
    # def index 
    #     if params.has_key?(:genre_id)
    #       @movies = Movie.joins(:genres).where(genres: {id: params[:genre_id]})
        
    #       movie_ids = @movies.ids
    #       @genres = Genre.joins(:movie_lists).where(movie_lists: { movie_id: movie_ids})

    #     else
    #       @movies = Movie.all
    #       @genres = Genre.all
    #     end  
    #     render :index
    # end

    def show 
        @movie = Movie.find_by(id: params[:id])
        render :show
    end
end
