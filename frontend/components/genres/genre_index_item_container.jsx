import {connect} from 'react-redux';
import GenreIndexItem from './genre_index_item';
import {fetchGenres, fetchGenre} from '../../actions/movies_actions';
import {receiveDropDownMovie} from '../../actions/display_actions';
import {withRouter} from 'react-router-dom';

const mSP = (state,ownProps) => ({
    genreUrl: ownProps.match.params.genreId,
});


export default withRouter(connect(mSP,null)(GenreIndexItem));