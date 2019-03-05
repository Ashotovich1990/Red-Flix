import {connect} from 'react-redux';
import MovieListItem from './movie_list_item'; 
import {receiveDropDownMovie} from '../../../actions/display_actions';

const mSP = (state,ownProps) => ({
    hovered: ownProps.hovered,
    content: ownProps.content,
});

const mDP = dispatch => ({
    receiveDropDownMovie: (movieId, genreId) => dispatch(receiveDropDownMovie(movieId, genreId)),
})


export default connect(mSP,mDP)(MovieListItem);
