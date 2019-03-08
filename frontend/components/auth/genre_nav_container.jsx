import {connect} from 'react-redux';
import {GenreNavBar} from './genre_nav_bar';
import {fetchGenre} from '../../actions/movies_actions';
import {resetSearchItem} from '../../actions/search_actions'
import {withRouter} from 'react-router-dom';

const mDP = dispatch => ({
    fetchGenre: genreId => dispatch(fetchGenre(genreId)),
    fetchGenres: () => dispatch(fetchGenres()),
    resetSearchItem: () => dispatch(resetSearchItem()),
});

export default withRouter(connect(null,mDP)(GenreNavBar));