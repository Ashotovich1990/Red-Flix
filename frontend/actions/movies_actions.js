import * as MovieApiUtil from '../util/movies_api_util'

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";

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

export const fetchGenres = () => dispatch => (
    MovieApiUtil.fetchGenres()
    .then(res => dispatch(receiveMovies(res)))
)

export const fetchGenre = (genreId) => dispatch => (
    MovieApiUtil.fetchGenre(genreId)
    .then(res => dispatch(receiveMovies(res)))
)

export const fetchMovie = movieId => dispatch => (
    MovieApiUtil.fetchMovie(movieId)
    .then(res => dispatch(receiveMovie(res)))
)