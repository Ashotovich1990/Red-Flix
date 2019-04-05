import React from 'react';
import GenreIndexItem from './genre_index_item_container';
import MyListContainer from './my_list_container'
import GenreMovieDisplayContainer from './movies/genre_movie_display_container';
import SearchResultContainer from './search_result_container';
import Footer from './footer';


class GenreIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {movieToDisplay: '1'}
    }

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

    render() {

        if (this.props.search.item) {
            return ( <div>
                <SearchResultContainer />
                <Footer />
                </div>
            )
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
            return (
                <div>
                <MyListContainer />
                <Footer />
                </div>)
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
   
        return (
         <div  className="genre-container">
            <GenreMovieDisplayContainer genreId={this.props.genreId}/>
            <div className="andy-fix-it">
                {genreMain}
                {genreNames}
            </div>
            <div className="footer-container">
                <Footer />
            </div>
         </div>
        );
    }
}

export default GenreIndex;