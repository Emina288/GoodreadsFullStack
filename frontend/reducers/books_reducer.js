import { ADD_BOOK, ADD_BOOKS } from '../actions/book_actions';

const booksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case ADD_BOOK:
            const newBook = action.book;
            return Object.assign(
                {}, 
                state, 
                 {[newBook.id]: newBook }
            );
        case ADD_BOOKS:
            const newState = {};
            action.books.forEach(book => {
                newState[book.id] = book;
            });
            return newState;
        default:
            return state;
    }
};

export default booksReducer;
