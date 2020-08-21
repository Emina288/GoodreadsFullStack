import { connect } from "react-redux";
import { withRouter } from "react-router";

import BookShow from "./book_show";
import { fetchBook, fetchBooks } from "../../actions/book_actions";
import { login, logout } from "../../actions/session_actions";
import { searchBooks } from "../../actions/book_actions";
import {
  fetchBookshelves,
  addBookshelf,
  addBooking,
} from "../../actions/bookshelf_action";
import {
  createNewReview,
  deleteReview,
  changeReview,
} from "../../actions/review_action";

const mapStateToProps = (state, ownProps) => {
  const bookId = ownProps.match.params.bookId;
  const book = state.entities.books[bookId];
  return {
    book,
    books: state.entities.books,
    user: state.entities.users[state.session.id],
    session: state.session,
    errors: state.errors.search,
    errorsShelf: state.errors.shelf,
    bookshelves: Object.values(state.bookshelves),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBook: (bookId) => dispatch(fetchBook(bookId)),
    fetchBooks: () => dispatch(fetchBooks()),
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    searchBooks: (keyword) => dispatch(searchBooks(keyword)),
    fetchBookshelves: () => dispatch(fetchBookshelves()),
    addBookshelf: (bookshelf) => dispatch(addBookshelf(bookshelf)),
    addBooking: (booking) => dispatch(addBooking(booking)),
    createReview: (review) => dispatch(createNewReview(review)),
    deleteReview: (id) => dispatch(deleteReview(id)),
    changeReview: (id, review) => dispatch(changeReview(id, review)),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookShow)
);
