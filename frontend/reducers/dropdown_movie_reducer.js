import {
    RECEIVE_DROPDOWN_MOVIE,
} from '../actions/display_actions';
import {RECEIVE_MOVIES} from '../actions/movies_actions';
import {merge} from 'lodash';


const dropDownMovieReducer = (oldState = {movieId: null, genreId: null}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_DROPDOWN_MOVIE:
            newState = merge({}, oldState);
            newState.movieId = action.body[0];
            newState.genreId = action.body[1];
            return newState; 
        case RECEIVE_MOVIES:
            newState = merge({}, oldState);
            newState.movieId = null;
            newState.genreId = null;
            return newState; 
        default:
            return oldState;
    }
}


export default dropDownMovieReducer;
