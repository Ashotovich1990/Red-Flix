import {connect} from 'react-redux';
import MovieListDropbar from './movie_list_dropbar'; 
import {receiveDropDownMovie} from '../../../actions/display_actions';

const mSP = state => {
    const dropDownMovie = state.dropDownMovie;
    const myList = state.entities.myList;
    const isOnList = myList[0].includes(dropDownMovie.movieId);
    
    return ({
        movies: state.entities.movies,
        genreLists: state.entities.genreLists,
        genreNames: state.entities.genreNames,
        myList,
        dropDownMovie,
        isOnList
    })
}

const mDP = dispatch => ({
    addMovie: movieId => dispatch(addMovie(movieId)),
    removeMovie: movieId => dispatch(removeMovie(movieId)),
    receiveDropDownMovie: (movieId, genreId) => dispatch(receiveDropDownMovie(movieId, genreId)),
})

export default connect(mSP, mDP)(MovieListDropbar);