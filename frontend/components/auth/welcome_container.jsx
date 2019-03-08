import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import Welcome from './welcome';
import {logout} from '../../actions/session_actions';
import {receiveSearchItem } from '../../actions/search_actions';
import {resetSearchItem} from '../../actions/search_actions'

const mapStateToProps = state => ({
   currentUser: state.entities.users[state.session.id],
   genres: state.entities.genreNames,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    receiveSearchItem: phrase => dispatch(receiveSearchItem(phrase)),
    resetSearchItem: () => dispatch(resetSearchItem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);