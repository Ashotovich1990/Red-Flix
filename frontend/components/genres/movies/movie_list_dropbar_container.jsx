import {connect} from 'react-redux';
import MovieListDropbar from './movie_list_dropbar'; 
import {receiveDropDownMovie} from '../../../actions/display_actions';

const mSP = state => ({
    movies: state.entities.movies,
    dropDownMovie: state.dropDownMovie,
})

const mDP = dispatch => ({
    addMovie: movieId => dispatch(addMovie(movieId)),
    removeMovie: movieId => dispatch(removeMovie(movieId)),
    receiveDropDownMovie: (movieId, genreId) => dispatch(receiveDropDownMovie(movieId, genreId)),
})

export default connect(mSP, mDP)(MovieListDropbar);