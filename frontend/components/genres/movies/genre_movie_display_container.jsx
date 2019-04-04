import GenreMoviePlay from './genre_movie_display';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchMovie} from '../../../actions/movies_actions'

const mSP = (state, ownProps) => ({
    movieId: state.mainMovie,
    movies: state.entities.movies,
    pageGenreId: ownProps.match.params.genreId,
    myList: state.entities.myList,
})

const mDP = dispatch => ({
    fetchMovie: movieId => dispatch(fetchMovie(movieId)),
    addMovie: movieId => dispatch(addMovie(movieId)),
    removeMovie: movieId => dispatch(removeMovie(movieId)),
})

export default withRouter(connect(mSP, mDP)(GenreMoviePlay));