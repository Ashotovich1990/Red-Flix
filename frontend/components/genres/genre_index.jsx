import React from 'react';
import GenreIndexItem from './genre_index_item';
import GenreMovieDisplayContainer from './movies/genre_movie_display_container';

class GenreIndex extends React.Component {
    constructor(props) {
        super(props)
        // this.userWatchlist = this.userWatchlist.bind(this)
    }

    componentDidMount() {
        if (this.props.genreId) {
          this.props.fetchGenre(this.props.genreId);
        } else {
          this.props.fetchGenres();
        }
    }

    componentDidUpdate() {
       this.props.receiveDropDownMovie(null, null);
    }

    componentWillUnmount() {
        if (this.props.genreId) {
          this.props.fetchGenre(this.props.genreId);
        } else {
          this.props.fetchGenres();
        }
    }

    // userWatchlist() {
    //     debugger
    //     return (
    //     <GenreIndexItem
    //     key='0' 
    //     fetchGenre ={this.props.fetchGenre}
    //     genreId='0'
    //     genreName={this.props.genreNames[0]} 
    //     movies={this.props.genreLists[0].map(movie_id => this.props.movies[movie_id])} />
    //     );
    // }

    render() {
        let genreNames
        let genreMain =<div></div>;
        if (!this.props.genreId) {
            genreNames = Object.keys(this.props.genreLists).map((key) => (
                <GenreIndexItem
                    key={key} 
                    genreUrl = {this.props.genreId}
                    fetchGenre ={this.props.fetchGenre}
                    genreId={key}
                    genreLists = {this.props.genreLists}
                    genreName={this.props.genreNames[key]} 
                    movies={this.props.genreLists[key].map(movie_id => this.props.movies[movie_id])} 
                />
                )
            )
        } else {
                genreMain = Object.keys(this.props.genreLists).map((key) => {
                if (key === '0' || key === this.props.genreId) {
                    return (
                <GenreIndexItem
                    key={key} 
                    fetchGenre ={this.props.fetchGenre}
                    genreUrl = {this.props.genreId}
                    genreLists = {this.props.genreLists}
                    genreId={key}
                    genreName={this.props.genreNames[key]} 
                    movies={this.props.genreLists[key].map(movie_id => this.props.movies[movie_id])} 
                /> )
                }
            })
            genreNames = Object.keys(this.props.genreLists).map((key) => {
                if (key != '0' && key != this.props.genreId) {
                    return (
                <GenreIndexItem
                    key={key} 
                    fetchGenre ={this.props.fetchGenre}
                    genreUrl = {this.props.genreId}
                    genreId={key}
                    genreLists = {this.props.genreLists}
                    genreName={this.props.genreNames[key]} 
                    movies={this.props.genreLists[key].map(movie_id => this.props.movies[movie_id])} 
                /> )
            }
            }
            )

        }
      
        
        return (
         <div className="genre-container">
                <GenreMovieDisplayContainer genreMovieId="1" />
               {genreMain}
               {genreNames}
         </div>
        );
    }
}

export default GenreIndex;