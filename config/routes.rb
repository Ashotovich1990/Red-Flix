Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :genres, only: [:index, :show] 
    resources :movies, only: [:show, :index, :create, :destroy] 
    
  end

end
