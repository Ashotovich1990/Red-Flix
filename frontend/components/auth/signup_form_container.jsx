import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup,login} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.sessionErrors,
    formType: "Sign Up",
    formOutInfo: "Already signed up?",
    demoUser: state.entities.users.demoId,
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);