import * as BookAPIUtil from "../util/book_api_util";
export const ADD_BOOK = "ADD_BOOK";
export const ADD_BOOKS = "ADD_BOOKS";



export const receiveBook = book => {
    return {
        type: ADD_BOOK,
        book
    };
};

export const receiveBooks = books => {
    return {
        type: ADD_BOOKS,
        books
    };
};




export const fetchBooks = () => (dispatch) => {
    return (
        BookAPIUtil.fetchBooks().then(books => dispatch(receiveBooks(books)))
    )
};

export const fetchBook = (bookId) => (dispatch) => {
    return (
        BookAPIUtil.fetchBook(bookId).then(book => dispatch(receiveBook(book)))
    )
};

