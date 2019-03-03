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