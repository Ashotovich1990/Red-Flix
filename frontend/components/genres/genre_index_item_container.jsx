// import {connect} from 'react-redux';
// import GenreIndexItem from './genre_index_item';
// import {fetchGenres, fetchGenre} from '../../actions/movies_actions';
// import {receiveDropDownMovie} from '../../actions/display_actions';
// import {withRouter} from 'react-router-dom';

// const mSP = (state,ownProps) => ({
//     genreUrl: ownProps.match.params.genreId,
//     movies: state.entities.movies, 
//     genreLists: state.entities.genreLists,
//     genreNames: state.entities.genreNames,
// });

// const mDP = dispatch => ({
//     fetchGenres: () => dispatch(fetchGenres()),
//     fetchGenre: genreId => dispatch(fetchGenre(genreId)),
//     receiveDropDownMovie: (movieId, genreId) => dispatch(receiveDropDownMovie(movieId, genreId)),
// });

// export default withRouter(connect(mSP,mDP)(GenreIndexItem));