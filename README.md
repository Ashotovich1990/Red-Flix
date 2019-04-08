# RedFlix

Check out the live app [here](https://red-flex.herokuapp.com/#/).

Redflix is a single-page Netflix clone web-application, inspired by my love of Russian and Soviet cinema. It uses Rails and Postgres on the backend and React/Redux on the frontend.

This project was built in two weeks, although I plan to improve it further more and add more features.

# Features 

### Authentication

* Password digest using BCrypt.

* Session token refresh on every sign in and sign out.

### Watch movies 

* Users can watch movies 

* Users can watch movie trailers on the browse page

### Searching and Browsing movies 

* Users can browse movies by genres

* Users can search movies by titles 

### My List 

* User have their lists

* Users can add and remove movies to their list

# Technical solutions

###  Organizing data

* Movies and Genres are connected by movie-lists joins table.
``` ruby 
class MovieList < ApplicationRecord
    validates :movie_id, :genre_id, presence: true
    validates_uniqueness_of :genre_id, scope: [:movie_id]

    belongs_to :movie,
    primary_key: :id,
    foreign_key: :movie_id,
    class_name: :Movie

    belongs_to :genre,
    primary_key: :id, 
    foreign_key: :genre_id,
    class_name: :Genre
end
```
* Acitve Records assosiations are establish to enable fetching all the movies belonging to the specific genre and all the genres belonging to the specific movie.
``` ruby 
class Movie < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :description, :year, :maturity_rating, presence: true
    
    has_many :watchlist_items,
    primary_key: :id,
    foreign_key: :movie_id,
    class_name: :UserWatchlist

    has_many :users,
    through: :watchlist_items,
    source: :user

    has_many :movie_lists,
    primary_key: :id, 
    foreign_key: :movie_id,
    class_name: :MovieList

    has_many :genres,
    through: :movie_lists,
    source: :genre
end
```
* Movie-lists table has sample-movie boolean column which is designed to avoid fetching every movie in the database when populating the main page with genres. 
``` ruby 
class Genre < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :movie_lists,
    primary_key: :id,
    foreign_key: :genre_id,
    class_name: :MovieList

    has_many :sample_movie_lists, -> {where sample: true},
    class_name: :MovieList

    has_many :sample_movies,
    through: :sample_movie_lists,
    source: :movie

    has_many :movies,
    through: :movie_lists,
    source: :movie
end
```
* Active Storage is used to store movie posters and videos. Active Storage assosiactions are defined in a way to enable eager loading in the conrtollers. 
``` ruby 
class Movie < ApplicationRecord
  has_one_attached :photo 

    scope :with_eager_loaded_photo, -> { eager_load(photo_attachment: :blob) }
    scope :with_preloaded_photo, -> { preload(photo_attachment: :blob) }

    has_one_attached :video

    scope :with_eager_loaded_video, -> { eager_load(video_attachment: :blob) }
    scope :with_preloaded_video, -> { preload(video_attachment: :blob) }
end
```
* My Lists is handled in a special way. It is set in the Genre table under index 0, only it gets its movies from user-watchlists joins table every time there is a need to extract 'my-list' for a given user (and not from the movie-lists). This solution was chosen to make it possible to deal with my-list on the frontend level as another genre.
``` ruby
class UserWatchlist < ApplicationRecord
    validates_uniqueness_of :user_id, scope: [:movie_id]
    validates :user_id, :movie_id, presence: true  

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id, 
    class_name: :User
    
    belongs_to :movie, 
    primary_key: :id,
    foreign_key: :movie_id,
    class_name: :Movie

end
```
* Additionally actors and castings tables are established with according Acrtive Record assosiactions to add movie cast feature to movies (this part is realized only on the backend level due to the time constraints). 

### Routes and controllers 
* Following routes are established to manage MVC model. 
``` ruby
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :genres, only: [:index, :show] 
    resources :movies, only: [:show, :create, :destroy]  
  end
```
* User and Session controllers take care of signing up, logging in and logging out the user.
* Genres controller is responsible for populating the browse page with movies. It uses INDEX method to get all the genres and sample movies that belong to that genre and SHOW method to get all the movies belonging the specific genre. Both methods use Active Records 'includes' and Active Storage 'with_attached' methods to enable eager loading and avoid n+1 db queries. 
``` ruby
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
        if !@my_watchlist.empty?
            @movies += Movie.with_attached_photo.with_attached_video.joins(:users).where(users: {id: current_user.id}) 
            @genre_names[0] = Genre.first.name
            @genre_lists[0] = @my_watchlist[0]
        end
        
        render :show
    end
```
* After fetching all the movies that belong to the specific genre SHOW method also gathers data on all the other genres that fetched movies also belong to, which lets sort movies of the given genre by other genres on the frontend level.
* SHOW and INDEX method also gather the user watchlist movies under the genre indexed at zero.
* Movies controller has CREATE and DELETE methods which add and remove movies from the user's watchlist, and SHOW method which is responsible for fetching the movie user is going to watch. 
``` ruby
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

    private 

    def movie_params 
      params.require(:movie).permit(:id, :term)
    end

end
```

### Redux state and logic 
* The state consists of the follwing slices. 
``` JavaScript
const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    dropDownMovie: dropDownMovieReducer,
    mainMovie: mainMovieReducer,
    search: searchItemReducer,
})
```
* Session slice handles user auth concerns. 
* Entities slice translates the db structure onto the FrontEnd level. 
``` JavaScript
const entitiesReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    genreLists: genreListsReducer,
    genreNames: genreNamesReducer,
    myList: userWatchlistsReducer,
});
```
* Errors slice handles delivering session errors to the user. 
* DropDownMovie slice handles logic nessecary to provide dropdown movie-window feature in the movie-list carousels. 
![Image description](app/assets/images/dropdown-movie.png)
* MainMovie slice contains the main movie_id that is displayed on top of every browse page. 
* Search slice contains the search phrase provided by the user and is responsible for handling the logic of reorganizing the web-application structure when the user is searching for something. 

### Frontend routes and structure
* The app has the following main structure 
``` javascript 
const App = () => (
    <div>
        <header id="main-header">
            <WelcomeContainer />
        </header>
        <Switch>
            <ProtectedRoute exact path="/browse/:genreId/watch/:movieId" component={MoviePlayContainer}/>
            <ProtectedRoute exact path="/browse/:genreId" component={GenreIndexContainer}/>
            <ProtectedRoute exact path="/browse" component={GenreIndexContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact patch="/" component={WelcomeOffer}/>
        </Switch>    
    </div>
)
```
* Protected and Auth routes are utilized to control users access to the app's components. 
* MoviePlayContainer plays the movie according to the :moveId param in the frontend route. 
![Image description](app/assets/images/movie-display.png)
* GenreIndexContainer either renders the home page if the :genreId param is empty 
![Image description](app/assets/images/main-page.png)
 or the specific genres if it's not. 
 ![Image description](app/assets/images/genre-page.png)

### Some of React components 
* The app heavily relies on React to create an engaging and interactive frontend. 
* The main components are broken down into smaller ones. Like GenreIndexContainer includes GenreIndexItems,  which in their turn include MovieListItems.
``` javascript 
import React from 'react';
import MovieListItemContainer from './movies/movie_list_item_container';
import {Link} from 'react-router-dom';
import MovieDropbarContainer from './movies/movie_list_dropbar_container';


class GenreIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hovered: null, browse: "", start: 0, end: 6, showArrowLeft: false, showArrowRight: false, linkArrow: <div></div>, style: 'genre-list'}
    this.onMouseEnterHandle = this.onMouseEnterHandle.bind(this)
    this.onMouseLeaveHandle = this.onMouseLeaveHandle.bind(this)
    ...
  }

  handleCarouselStyle() {
    if (this.props.dropDownMovie.genreId === this.props.genreId) {
      this.setState( { style: 'genre-list-no-trasform' })
    } else {
      this.setState( { style: 'genre-list' })
    }
  }
  
  ...
}
```
*  Those lists represent movies of the specific genre organized in a carousel style. 
![Image description](app/assets/images/carousel.png).
* Background posters for each movie are extracted from Active Storage, passed down the props and used for styling directly from inside the React Component.
``` javascript 
class MovieListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {redirect: false}
        this.style = {
            width: '200px',
            height: "280px",
            backgroundImage: "url(" + this.props.content.poster + ")",
            backgroundSize: 'cover',
            alignItems: 'stretch',
        }
        this.handleClick = this.handleClick.bind(this);
        this.scrollToItem = this.scrollToItem.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.changeDropDownMovie = this.changeDropDownMovie.bind(this);
    }
}
```

# Pages 
* Landing
![Image description](app/assets/images/landing.png).
* Sing up/Sing In
![Image description](app/assets/images/signup.png).
* Home
![Image description](app/assets/images/home.png).
* Selected Genre 
![Image description](app/assets/images/genre.png).
* Search Results 
![Image description](app/assets/images/search.png).
* My List
![Image description](app/assets/images/mylist.png).

