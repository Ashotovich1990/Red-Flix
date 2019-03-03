import {connect} from 'react-redux';
import GenreIndex from './genre_index';
import {fetchGenres} from '../../actions/movies_actions';

const mSP = state => ({
    movies: state.entities.movies, 
    genreLists: state.entities.genreLists,
    genreNames: state.entities.genreNames,
});

const mDP = dispatch => ({
    fetchGenres: () => dispatch(fetchGenres()),
});

export default connect(mSP,mDP)(GenreIndex)