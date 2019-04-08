import { connect } from 'react-redux';
import Welcome from './welcome';
import {logout} from '../../actions/session_actions';
import {receiveSearchItem } from '../../actions/search_actions';
import {findMovies} from '../../actions/movies_actions';

const mapStateToProps = (state) => ({
   currentUser: state.entities.users[state.session.id],
   genres: state.entities.genreNames,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    receiveSearchItem: phrase => dispatch(receiveSearchItem(phrase)),
    findMovies: term => dispatch(findMovies(term)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);