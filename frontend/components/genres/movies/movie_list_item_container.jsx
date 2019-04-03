import {connect} from 'react-redux';
import MovieListItem from './movie_list_item'; 
import {receiveDropDownMovie} from '../../../actions/display_actions';
import {withRouter} from 'react-router-dom';

const mSP = (state,ownProps) => ({
    hovered: ownProps.hovered,
    content: ownProps.content,
    pageGenreId: ownProps.match.params.genreId 
});

const mDP = dispatch => ({
    receiveDropDownMovie: (movieId, genreId) => dispatch(receiveDropDownMovie(movieId, genreId)),
})


export default withRouter(connect(mSP,mDP)(MovieListItem));
