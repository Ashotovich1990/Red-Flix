class Api::MoviesController < ApplicationController
    before_action :ensure_login
    
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

    # def index
    #     @movies = Movie.with_attached_photo.with_attached_video.where("title LIKE ?", "%#{movie_params[:term]}%").all
    # end
    
    private 

    def movie_params 
      params.require(:movie).permit(:id, :term)
    end

end
