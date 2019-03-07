import {connect} from 'react-redux';
import GenreIndex from './genre_index';
import {fetchGenres, fetchGenre} from '../../actions/movies_actions';
import {receiveDropDownMovie, receiveMainMovie} from '../../actions/display_actions';
import {withRouter} from 'react-router-dom';

const mSP = (state,ownProps) => ({
    genreId: ownProps.match.params.genreId,
    myList: state.entities.myList,
    mainMovie: state.mainMovie,
    movies: state.entities.movies, 
    genreLists: state.entities.genreLists,
    genreNames: state.entities.genreNames,
    search: state.search,
});

const mDP = dispatch => ({
    fetchGenres: () => dispatch(fetchGenres()),
    fetchGenre: genreId => dispatch(fetchGenre(genreId)),
    receiveDropDownMovie: (movieId, genreId) => dispatch(receiveDropDownMovie(movieId, genreId)),
    receiveMainMovie: movieId => dispatch(receiveMainMovie(movieId)),
});

export default withRouter(connect(mSP,mDP)(GenreIndex));