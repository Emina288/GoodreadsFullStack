import {
  ADD_BOOKSHELVES,
  ADD_BOOKSHELF,
  NEW_BOOKSHELF,
  DELETE_BOOKSHELF,
  ADD_BOOKING,
} from "../actions/bookshelf_action";

const BookshelvesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case ADD_BOOKSHELF:
      const newBookshelf = action.bookshelf;
      return Object.assign({}, state, { [newBookshelf.id]: newBookshelf });
    case ADD_BOOKSHELVES:
      const allBookshelves = Object.values(action.bookshelves);
      const newState = {};
      allBookshelves.forEach((bookshelf) => {
        newState[bookshelf.id] = bookshelf;
      });
      return newState;
    case NEW_BOOKSHELF:
      const addBookshelf = action.bookshelf;
      return Object.assign({}, state, { [addBookshelf.id]: addBookshelf });
    case DELETE_BOOKSHELF:
      const nState = Object.assign({}, state);
      delete nState[action.bookshelfId];
      return nState;
    default:
      return state;
  }
};

export default BookshelvesReducer;
