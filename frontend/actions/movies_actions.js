import * as MovieApiUtil from '../util/movies_api_util'
import {receiveMainMovie} from './display_actions';

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_MOVIE = "REMOVE_MOVIE";

const receiveMovies = payload => {
   
    return (
    {
    type: RECEIVE_MOVIES,
    payload,
})
}

const receiveMovie = movie => ({
    type: RECEIVE_MOVIE,
    movie,
})

const addToWatchlist = movie => ({
    type: ADD_TO_WATCHLIST,
    movie,
})

const deleteMovie = movieId => ({
    type: REMOVE_MOVIE,
    movieId,
});

export const fetchGenres = () => dispatch => (
    MovieApiUtil.fetchGenres()
    .then(res => dispatch(receiveMovies(res)))
)

export const fetchGenre = (genreId) => dispatch => {

    MovieApiUtil.fetchGenre(genreId)
    .then(res => dispatch(receiveMovies(res)))
    .then(res => res.payload.movies ? dispatch(receiveMainMovie(res.payload.movieIds[Math.floor(Math.random()*res.payload.movieIds.length)])) : null)
}

export const fetchMovie = movieId => dispatch => (
    MovieApiUtil.fetchMovie(movieId)
    .then(res => dispatch(receiveMovie(res)))
)

export const addMovie = movieId => dispatch => (
    MovieApiUtil.addMovie(movieId)
    .then(res => dispatch(addToWatchlist(res)))
)

export const removeMovie = movieId => dispatch => (
    MovieApiUtil.removeMovie(movieId)
    .then(res => dispatch(deleteMovie(movieId)))
)