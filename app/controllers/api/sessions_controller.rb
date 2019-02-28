class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(params[:user][:username],params[:user][:password])
        if @user 
          login(@user)
          render 'api/users/show'
        else  
          render json: @user.errors.full_messages, status: 401
        end
    end

    def destroy
         if logged_in?
            log_out!
            render json: {}
         else 
            render json: {message: 'No User'}, status: 404
         end
    end
end


# sessions_controller.rb
# sessions_controller.rb
