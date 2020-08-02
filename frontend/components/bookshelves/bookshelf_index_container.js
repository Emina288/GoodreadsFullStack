import { connect } from "react-redux";
import { withRouter } from "react-router";

import BookshelfIndex from "./bookshelf_index";
import { addBookshelf, fetchBookshelves } from "../../actions/bookshelf_action";
import { logout } from "../../actions/session_actions";
import { searchBooks } from "../../actions/book_actions";

const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.id],
  bookshelves: state.bookshelves
});

const mapDispatchToProps = (dispatch) => ({
  addBookshelf: (bookshelf) => dispatch(addBookshelf(bookshelf)),
  logout: () => dispatch(logout()),
  searchBooks: (keyword) => dispatch(searchBooks(keyword)),
  fetchBookshelves: () => dispatch(fetchBookshelves())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex)
);
