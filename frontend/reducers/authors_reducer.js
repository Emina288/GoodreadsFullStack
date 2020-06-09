import { ADD_AUTHOR, ADD_AUTHORS} from '../actions/author_actions';

const authorsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case ADD_AUTHOR:
            const newAuthor = action.author;
            return Object.assign(
                {}, 
                state, 
                 {[newAuthor.id]: newAuthor }
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
