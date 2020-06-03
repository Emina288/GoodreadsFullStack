import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

const _nullUser = {
    id: null
}

const SessionReducer = (oldState=_nullUser, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {id: action.user.id});
        case LOGOUT_CURRENT_USER: 
            return _nullUser;
        default: 
          return oldState;
    }

}

export default SessionReducer;