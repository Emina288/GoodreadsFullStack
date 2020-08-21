import * as BookAPIUtil from "../util/book_api_util";
export const ADD_BOOK = "ADD_BOOK";
export const ADD_BOOKS = "ADD_BOOKS";
export const RECIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";

export const receiveBook = (book) => {
  return {
    type: ADD_BOOK,
    book,
  };
};

export const receiveBooks = (books) => {
  return {
    type: ADD_BOOKS,
    books,
  };
};

export const receiveSearchErrors = (errors) => {
  return {
    type: RECIVE_SEARCH_ERRORS,
    errors,
  };
};

export const fetchBooks = () => (dispatch) => {
  return BookAPIUtil.fetchBooks().then((books) =>
    dispatch(receiveBooks(books))
  );
};

export const fetchBook = (bookId) => (dispatch) => {
  return BookAPIUtil.fetchBook(bookId).then((book) =>
    dispatch(receiveBook(book))
  );
};

export const searchBooks = (keyword) => (dispatch) => {
  return BookAPIUtil.searchBooks(keyword).then(
    (books) => dispatch(receiveBooks(books)),
    (err) => dispatch(receiveSearchErrors(err.responseJSON))
  );
};
