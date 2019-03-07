import {connect} from 'react-redux';
import SearchResult from './search_result';
// import {fetchGenres, fetchGenre} from '../../actions/movies_actions';
// import {receiveDropDownMovie} from '../../actions/display_actions';
import {withRouter} from 'react-router-dom';

const mSP = (state) => ({
    movies: Object.values(state.entities.movies),
    searchItem: state.search.item
});


export default withRouter(connect(mSP,null)(SearchResult));