import GenreMoviePlay from './genre_movie_display';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchMovie} from '../../../actions/movies_actions'

const mSP = (state) => ({
    movies: state.entities.movies,
})

const mDP = dispatch => ({
    fetchMovie: movieId => dispatch(fetchMovie(movieId))
})

export default withRouter(connect(mSP, mDP)(GenreMoviePlay));