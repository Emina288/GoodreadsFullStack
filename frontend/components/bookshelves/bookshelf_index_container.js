import { connect } from "react-redux";
import { withRouter } from "react-router";

import BookshelfIndex from "./bookshelf_index";
import { addBookshelf, fetchBookshelves } from "../../actions/bookshelf_action";
import { logout } from "../../actions/session_actions";
import { searchBooks, fetchBooks } from "../../actions/book_actions";
import { createNewReview } from "../../actions/review_action";

const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.id],
  bookshelves: state.bookshelves,
  books: state.entities.books, 
  errors: state.errors.shelf
});

const mapDispatchToProps = (dispatch) => ({
  addBookshelf: (bookshelf) => dispatch(addBookshelf(bookshelf)),
  logout: () => dispatch(logout()),
  searchBooks: (keyword) => dispatch(searchBooks(keyword)),
  fetchBookshelves: () => dispatch(fetchBookshelves()),
  fetchBooks: () => dispatch(fetchBooks()),
  createReview: (review) => dispatch(createNewReview(review)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex)
);
