import React from 'react';
import GenreIndexItem from './genre_index_item';
import MyListContainer from './my_list_container'
import GenreMovieDisplayContainer from './movies/genre_movie_display_container';
import SearchResultContainer from './search_result_container';
import { throws } from 'assert';

class GenreIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {movieToDisplay: '1'}
        // this.myRef = React.createRef();
        // this.userWatchlist = this.userWatchlist.bind(this)
        // this.setMovieToDisplay = this.setMovieToDisplay.bind(this)
    }

    // setMovieToDisplay() {
    //     if (this.props.genreId === '0') {
    //        this.setState({ movieToDisplay: null})
    //     } else if (this.props.genreId) {
    //        this.setState({ movieToDisplay: this.props.genreLists[this.props.genreId][0]})
    //     } 
    // }

    componentDidMount() {
        if (this.props.genreId) {
          this.props.fetchGenre(this.props.genreId)
        } else {
          this.props.fetchGenres()
        }
     
            window.scrollTo(0, 0)
         
    }

    componentDidUpdate(prev) {
        if (this.props.genreId && this.props.genreId !== prev.genreId) {
             window.scrollTo(0, 0)
        }
    }

    componentWillUnmount() {
        // this.myRef.current.scrollTo(0, 0);
        if (this.props.genreId) {
          this.props.fetchGenre(this.props.genreId)
        } else {
          this.props.fetchGenres()
        }
        window.scrollTo(0, 0)
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

        if (this.props.search.item) {
            return <SearchResultContainer />
        }

        let genreNames
        let genreMain = <div></div>;
        if (!this.props.genreId) {
            genreNames = Object.keys(this.props.genreLists).map((key) => (
                <GenreIndexItem
                    key={key} 
                    genreUrl = {this.props.genreId}
                    fetchGenre ={this.props.fetchGenre}
                    genreId={key}
                    myList = {this.props.myList}
                    genreLists = {this.props.genreLists}
                    genreName={this.props.genreNames[key]} 
                    movies={this.props.genreLists[key].map(movie_id => this.props.movies[movie_id])} 
                />
                )
            )
        } else if (this.props.genreId === '0') {
            return <MyListContainer />
        } else {
            //   commented thi sout of line 73 to remove my list from other genres key === '0' ||
                genreMain = Object.keys(this.props.genreLists).map((key) => {
                if (key === this.props.genreId) {
                    return (
                <GenreIndexItem
                    key={-key} 
                    fetchGenre ={this.props.fetchGenre}
                    genreUrl = {this.props.genreId}
                    genreLists = {this.props.genreLists}
                    myList = {this.props.myList}
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
                    myList = {this.props.myList}
                    genreId={key}
                    genreLists = {this.props.genreLists}
                    genreName={this.props.genreNames[key]} 
                    movies={this.props.genreLists[key].map(movie_id => this.props.movies[movie_id])} 
                /> )
            }
            }
            )

        }

        let movieToDisplay;

        // if (this.props.genreId === 0) {
        //    movieToDisplay = <div></div>;
        // } else if (this.props.genreId) {
        //     debugger
        //    movieToDisplay = <GenreMovieDisplayContainer genreMovieId={this.props.genreLists[this.props.genreId][0]} />;

        // } else {
        //     movieToDisplay = <GenreMovieDisplayContainer genreMovieId="1" />
        // }
      
        
        return (
         <div  className="genre-container">
               <GenreMovieDisplayContainer genreId={this.props.genreId}/>
               <div className="andy-fix-it">
                {genreMain}
                {genreNames}
               </div>
         </div>
        );
    }
}

export default GenreIndex;