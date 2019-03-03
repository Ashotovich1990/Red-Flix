import {
    RECEIVE_MOVIES,
} from '../actions/movies_actions';
import {merge} from 'lodash';

const genreListsReducer = (oldState ={}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_MOVIES:
          newState = merge({},action.payload.genreLists)
          return newState;
        default:
          return oldState;
    }
}

export default genreListsReducer;