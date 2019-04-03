import MoviePlay from './movie_display';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchMovie} from '../../../actions/movies_actions'

const mSP = (state,ownProps) => ({
    movieId: ownProps.match.params.movieId,
    genrePageId: ownProps.match.params.genreId,
    movies: state.entities.movies,
})

const mDP = dispatch => ({
    fetchMovie: movieId => dispatch(fetchMovie(movieId))
})

export default withRouter(connect(mSP, mDP)(MoviePlay));