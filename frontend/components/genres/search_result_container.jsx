import {connect} from 'react-redux';
import SearchResult from './search_result';
// import {fetchGenres, fetchGenre} from '../../actions/movies_actions';
// import {receiveDropDownMovie} from '../../actions/display_actions';
import {withRouter} from 'react-router-dom';

const mSP = (state) => {
  
    return {
    movies: Object.values(state.entities.movies),
    searchItem: state.search.item,
    genreLists: state.entities.genreLists,
    genreNames: state.entities.genreNames,
    dropDownMovie: state.dropDownMovie,
}};


export default withRouter(connect(mSP,null)(SearchResult));