import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = errors => {
  
    return {
    type: RECEIVE_SESSION_ERRORS,
    // chnaged from errors = to errors.full_messages
    errors,
};
}

export const clearErrors = () => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: [],
});

export const logout = () => dispatch => (
    SessionApiUtil.logout()
    .then(
        res => dispatch(logoutCurrentUser()),
        err => dispatch(receiveSessionErrors(err.responseJSON))
        )
);

export const signup = user => dispatch => (
    SessionApiUtil.signup(user)
    .then(
        res => dispatch(receiveCurrentUser(res)),
        err => dispatch(receiveSessionErrors(err.responseJSON))
        )
)

export const login = user => dispatch => {
    
    return (
    SessionApiUtil.login(user)
    .then(
        res => dispatch(receiveCurrentUser(res)),
        err => dispatch(receiveSessionErrors(err.responseJSON))
        )
    )
    }