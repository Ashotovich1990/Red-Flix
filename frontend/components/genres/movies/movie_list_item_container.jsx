import {connect} from 'react-redux';
import MovieListItem from './movie_list_item'; 

const mSP = (state,ownProps) => ({
    hovered: ownProps.hovered,
    content: ownProps.content,
});

export default connect(mSP,null)(MovieListItem);
