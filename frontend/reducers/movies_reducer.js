import {
    RECEIVE_MOVIES,
    RECEIVE_MOVIE,
    ADD_TO_WATCHLIST,
} from '../actions/movies_actions';
import {merge} from 'lodash';

const moviesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_MOVIES:
          newState = merge({},action.payload.movies);
          return newState; 
        case RECEIVE_MOVIE:
          newState = merge({}, oldState);
          newState[action.movie.id] = action.movie;
          return newState;
        case ADD_TO_WATCHLIST:
          newState = merge({}, oldState);
          newState[action.movie.id] = action.movie;
          return newState;
        default:
          return oldState;
    }
}

export default moviesReducer;