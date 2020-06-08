import { ADD_AUTHOR} from '../actions/author_actions';

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
        default:
            return state;
    }
};

export default authorsReducer;
