import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import moviesReducer from './movies_reducer';
import genreListsReducer from './genre_lists_reducer';
import genreNamesReducer from './genre_names_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    genreLists: genreListsReducer,
    genreNames: genreNamesReducer,
});

export default entitiesReducer;