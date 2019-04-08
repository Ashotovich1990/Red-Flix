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
![Image description](app/assets/images/routes.png). 
* User and Session controllers take care of signing up, logging in and logging out the user.
* Genres controller is responsible for populating the browse page with movies. It uses INDEX method to get all the genres and sample movies that belong to that genre and SHOW method to get all the movies belonging the specific genre. Both methods use Active Records 'includes' and Active Storage 'with_attached' methods to enable eager loading and avoid n+1 db queries. 
![Image description](app/assets/images/genres-controller.png)
* After fetching all the movies that belong to the specific genre SHOW method also gathers data on all the other genres that fetched movies also belong to, which lets sort movies of the given genre by other genres on the frontend level.
* SHOW and INDEX method also gather the user watchlist movies under the genre indexed at zero.
* Movies controller has CREATE and DELETE methods which add and remove movies from the user's watchlist, and SHOW method which is responsible for fetching the movie user is going to watch. 
![Image description](app/assets/images/movies-controller.png)

### Redux state and logic 
* The state consists of the follwing slices. 
![Image description](app/assets/images/state.png)
* Session slice handles user auth concerns. 
* Entities slice translates the db structure onto the FrontEnd level. 
![Image description](app/assets/images/entities.png)
* Errors slice handles delivering session errors to the user. 
* DropDownMovie slice handles logic nessecary to provide dropdown movie-window feature in the movie-list carousels. 
![Image description](app/assets/images/dropdown-movie.png)
* MainMovie slice contains the main movie_id that is displayed on top of every browse page. 
* Search slice contains the search phrase provided by the user and is responsible for handling the logic of reorganizing the web-application structure when the user is searching for something. 

### Frontend routes and structure
* The app has the following main structure 
![Image description](app/assets/images/app-structure.png)
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
![Image description](app/assets/images/genre-index-item.png)
*  Those lists represent movies of the specific genre organized in a carousel style. 
![Image description](app/assets/images/carousel.png).
* Background posters for each movie are extracted from Active Storage, passed down the props and used for styling directly from inside the React Component.
![Image description](app/assets/images/background-photo-style.png).

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

