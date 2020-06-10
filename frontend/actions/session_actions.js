import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const CLEAR_ERRORS = "CLEAR_ERRORS"

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user: currentUser
    }
};

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
};

export const clearErrors = () => {
    return {
    type: CLEAR_ERRORS
    }
}

export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers().then(users => (dispatch(receiveUsers(users))))
)


export const login = user => dispatch => (
    APIUtil.login(user).then(user => (dispatch(receiveCurrentUser(user))), err => (dispatch(receiveErrors(err.responseJSON))))
);

export const logout = () => dispatch => (
    APIUtil.logout().then(() => dispatch(logoutCurrentUser()))
);

export const signup = (user) => dispatch => {
    return (
    APIUtil.signup(user).then(user => (dispatch(receiveCurrentUser(user))), err => (dispatch(receiveErrors(err.responseJSON))))
    )
    }


