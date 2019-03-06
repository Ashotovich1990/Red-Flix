export const RECEIVE_DROPDOWN_MOVIE = "RECEIVE_DROPDOWN_MOVIE";
export const RECEIVE_MAIN_MOVIE = "RECEIVE_MAIN_MOVIE";

export const receiveDropDownMovie = (movieId, genreId) => ({
    type: RECEIVE_DROPDOWN_MOVIE,
    body: [movieId, genreId]
})

export const receiveMainMovie = movieId => ({
    type: RECEIVE_MAIN_MOVIE,
    movieId
})


