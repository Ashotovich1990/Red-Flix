class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def login(user)
        @current_user = user 
        session[:session_token] = user.reset_session_token!
    end

    def log_out!
        @current_user.reset_session_token!
        @current_user = nil 
        session[:session_token] = nil
    end

    def logged_in? 
        !!current_user
    end

    def current_user 
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_login
        redirect to '/' unless logged_in?
    end
end
