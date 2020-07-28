import { connect } from "react-redux";
import { withRouter } from "react-router";

import BookshelfIndex from "./bookshelf_index";
import { fetchBookshelves, addBookshelf } from "../../actions/bookshelf_action";
import { login, logout, signup } from "../../actions/session_actions";
import { searchBooks } from "../../actions/book_actions";

const mapStateToProps = (state) => ({
  bookshelves: Object.values(state.bookshelves),
  user: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  fetchBookshelves: () => dispatch(fetchBookshelves()),
  addBookshelf: (bookshelf) => dispatch(addBookshelf(bookshelf)),
  logout: () => dispatch(logout()),
  searchBooks: (keyword) => dispatch(searchBooks(keyword)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex)
);
