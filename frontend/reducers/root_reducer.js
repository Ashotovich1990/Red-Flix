import {combineReducers} from 'redux';
import sessionReducer from  './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import dropDownMovieReducer from './dropdown_movie_reducer';
import mainMovieReducer from './main_movie_reducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    dropDownMovie: dropDownMovieReducer,
    mainMovie: mainMovieReducer,
})

export default rootReducer;