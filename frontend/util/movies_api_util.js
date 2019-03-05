export const fetchGenres = () => {
    return (
      $.ajax({
          url: '/api/genres',
          method: 'GET',
      })
    );
};

export const fetchGenre = GenreId => {
    return (
        $.ajax({
            url: `/api/genres/${GenreId}`,
            method: 'get',
        })
    )
};

export const fetchMovie = MovieId => {
    return (
        $.ajax({
            url: `/api/movies/${MovieId}`,
            method: 'get',
        })
    )
};

export const addMovie = MovieId => {
    return (
        $.ajax({
            url: `/api/movies`,
            method: 'POST',
            data: {
                movie: {id: MovieId}
            }
        })
    )
}

export const removeMovie = movieId => {
    return (
        $.ajax({
            url: `/api/movies/${movieId}`,
            method: 'DELETE',
        })
    )
}

