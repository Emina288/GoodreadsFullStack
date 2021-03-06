import * as BookshelfApiUtil from "../util/bookshelf_api_util";
import { receiveErrors } from "./session_actions";
export const ADD_BOOKSHELVES = "ADD_BOOKSHELVES";
export const ADD_BOOKSHELF = "ADD_BOOKSHELF";
export const NEW_BOOKSHELF = "NEW_BOOKSHELF";
export const DELETE_BOOKSHELF = "DELETE_BOOKSHELF";
export const NEW_BOOKING = "ADD_BOOKING";
export const RECEIVE_ERRORS_SHELF = "RECEIVE_ERRORS";
export const DELETE_BOOKING = "DELETE_BOOKING";


export const receiveBookshelf = (bookshelf) => {
  return {
    type: ADD_BOOKSHELF,
    bookshelf,
  };
};

export const receiveBookshelves = (bookshelves) => {
  return {
    type: ADD_BOOKSHELVES,
    bookshelves,
  };
};

export const receiveNewBookshelf = (bookshelf) => {
  return {
    type: NEW_BOOKSHELF,
    bookshelf,
  };
};

export const removeBookshelf = (bookshelfId) => {
  return {
    type: DELETE_BOOKSHELF,
    bookshelfId,
  };
};

export const receiveNewBooking = (booking) => {
  return {
    type: NEW_BOOKING,
    booking,
  };
};

export const deleteBooking = (bookingId) => {
  return {
    type: DELETE_BOOKING,
    bookingId,
  };
};


export const receiveErrorsShelf = (errors) => {
  return {
    type: RECEIVE_ERRORS_SHELF,
    errors,
  };
};

export const fetchBookshelves = () => (dispatch) => {
  return BookshelfApiUtil.fetchBookshelves().then((bookshelves) =>
    dispatch(receiveBookshelves(bookshelves))
  );
};

export const fetchBookshelf = (bookshelfId) => (dispatch) => {
  return BookshelfApiUtil.fetchBookshelf(bookshelfId).then((bookshelf) =>
    dispatch(receiveBookshelf(bookshelf))
  );
};

export const addBookshelf = (shelf) => (dispatch) => {
  return BookshelfApiUtil.createBookshelf(shelf).then(
    (bookshelf) => dispatch(receiveNewBookshelf(bookshelf)),
    (err) => dispatch(receiveErrorsShelf(err.responseJSON))
  );
};

export const destroyBookshelf = (bookshelfId) => (dispatch) => {
  return BookshelfApiUtil.deleteBookshelf(bookshelfId).then((bookshelfId) =>
    dispatch(removeBookshelf(bookshelfId))
  );
};

export const addBooking = (booking) => (dispatch) => {
  return BookshelfApiUtil.createBooking(booking).then((booking) =>
    dispatch(receiveNewBooking(booking))
  );
};

export const destroyBooking = (bookId, shelfId) => (dispatch) => {
  return BookshelfApiUtil.deleteBooking(bookId, shelfId).then((bookingId) =>
    dispatch(deleteBooking(bookingId))
  );
};


