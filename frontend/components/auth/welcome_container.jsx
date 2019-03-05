import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import Welcome from './welcome';
import {logout} from '../../actions/session_actions';

const mapStateToProps = state => ({
   currentUser: state.entities.users[state.session.id],
   genres: state.entities.genreNames,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);