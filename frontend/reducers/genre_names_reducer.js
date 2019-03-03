import {
    RECEIVE_MOVIES,
} from '../actions/movies_actions';
import {merge} from 'lodash';

const genreNamesReducer = (oldState ={}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_MOVIES:
          newState = merge({},action.payload.genreNames)
          return newState;
        default:
          return oldState;
    }
}

export default genreNamesReducer;