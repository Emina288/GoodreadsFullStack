import { RECEIVE_CURRENT_USER, RECEIVE_USERS  } from "../actions/session_actions";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_USERS: 
            const users = {};
            action.users.forEach(user => {
            users[user.id] = user;
            });
            return users;
        case RECEIVE_CURRENT_USER :
            return Object.assign({}, {[action.user.id]: action.user})
        default: 
         return oldState;
    }
}

export default usersReducer;