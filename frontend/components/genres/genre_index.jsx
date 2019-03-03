import React from 'react';
import GenreIndexItem from './genre_index_item';

class GenreIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchGenres();
    }

    render() {
        const genreNames = Object.keys(this.props.genreLists).map((key) => (
        <GenreIndexItem
        key={key} 
        genreName={this.props.genreNames[key]} 
        movies={this.props.genreLists[key].map(movie_id => this.props.movies[movie_id])} />
        )
        )
        return (
         <div className="genre-container">
               {genreNames}
         </div>
        );
    }
}

export default GenreIndex;