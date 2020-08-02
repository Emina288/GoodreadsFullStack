import { connect } from "react-redux";
import { withRouter } from "react-router";

import BookshelfShow from "./bookshelf_show";
import { logout } from "../../actions/session_actions";
import {
  fetchBookshelves,
  addBookshelf,
  addBooking,
} from "../../actions/bookshelf_action";

const mapStateToProps = (state, ownProps) => {
  const bookshelfId = ownProps.match.params.bookshelfId;
  const bookshelf = state.bookshelves[bookshelfId];
  return {
    bookshelf,
    user: state.entities.users[state.session.id],
    bookshelves: state.bookshelves,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    searchBooks: (keyword) => dispatch(searchBooks(keyword)),
    fetchBookshelves: () => dispatch(fetchBookshelves()),
    addBookshelf: (bookshelf) => dispatch(addBookshelf(bookshelf)),
    addBooking: (booking) => dispatch(addBooking(booking)),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookshelfShow)
);
