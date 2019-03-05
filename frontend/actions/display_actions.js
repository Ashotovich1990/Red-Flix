export const RECEIVE_DROPDOWN_MOVIE = "RECEIVE_DROPDOWN_MOVIE";

export const receiveDropDownMovie = (movieId, genreId) => ({
    type: RECEIVE_DROPDOWN_MOVIE,
    body: [movieId, genreId]
})


