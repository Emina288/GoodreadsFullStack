import { connect } from "react-redux";
import { withRouter } from "react-router";

import BookshelfShow from "./bookshelf_show";
import { logout } from "../../actions/session_actions";
import {
  fetchBookshelves,
  addBookshelf,
  addBooking,
} from "../../actions/bookshelf_action";
import { createNewReview } from "../../actions/review_action";
import { searchBooks, fetchBooks } from "../../actions/book_actions";

const mapStateToProps = (state, ownProps) => {
  const bookshelfId = ownProps.match.params.bookshelfId;
  const bookshelf = state.bookshelves[bookshelfId];
  return {
    bookshelf,
    user: state.entities.users[state.session.id],
    bookshelves: state.bookshelves,
    books: state.entities.books,
    errors: state.errors.shelf,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    searchBooks: (keyword) => dispatch(searchBooks(keyword)),
    fetchBookshelves: () => dispatch(fetchBookshelves()),
    fetchBooks: () => dispatch(fetchBooks()),
    addBookshelf: (bookshelf) => dispatch(addBookshelf(bookshelf)),
    addBooking: (booking) => dispatch(addBooking(booking)),
    createReview: (review) => dispatch(createNewReview(review)),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookshelfShow)
);
