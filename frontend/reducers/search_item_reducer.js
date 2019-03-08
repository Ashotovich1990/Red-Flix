import {
    RECEIVE_SEARCH_ITEM,
    RESET_SEARCH_ITEM,
} from '../actions/search_actions';
import {merge} from 'lodash';


const searchItemReducer = (oldState = {item: ""}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_SEARCH_ITEM:
          newState = merge({}, oldState);
          newState.item= action.phrase;
          return newState; 
        case RESET_SEARCH_ITEM:
          newState = merge({}, oldState);
          newState.item= "";
          return newState; 
        default:
          return oldState;
    }
}

export default searchItemReducer;