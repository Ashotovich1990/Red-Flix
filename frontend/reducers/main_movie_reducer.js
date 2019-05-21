import {
    RECEIVE_MAIN_MOVIE,
} from '../actions/display_actions';
import {merge} from 'lodash';


const mainMovieReducer = (oldState = '1', action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_MAIN_MOVIE:
          newState = action.movieId;
          return newState || null; 
        default:
          return oldState;
    }
}

export default mainMovieReducer;