import { ADD_AUTHOR, ADD_AUTHORS} from '../actions/author_actions';

const authorsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case ADD_AUTHOR:
            return Object.assign(
                {}, 
                state, 
                 {[action.author.id]: action }
            );
        case ADD_AUTHORS:
            const allAuthors = Object.values(action.authors);
            const newState = {};
            allAuthors.forEach(author => {
                newState[author.id] = author;
            });
                return newState;
        default:
            return state;
    }
};

export default authorsReducer;
