import {connect} from 'react-redux';
import MyList from './my_list';
import {withRouter} from 'react-router-dom';

const mSP = (state) => {
    const movies = state.entities.myList['0'].map(movieId => (
        state.entities.movies[movieId]
    ));
    
    return { movies, dropDownMovie: state.dropDownMovie}
};

export default withRouter(connect(mSP,null)(MyList));