import { connect } from "react-redux";
import { withRouter } from "react-router";
import BookshelfIndex from "./bookshelf_index";
import { fetchBookshelves, addBookshelf } from "../../actions/bookshelf_action";

const mapStateToProps = (state) => ({
  bookshelves: Object.values(state.bookshelves),
  current: state.session
});

const mapDispatchToProps = (dispatch) => ({
  fetchBookshelves: () => dispatch(fetchBookshelves()),
  addBookshelf: (bookshelf) => dispatch(addBookshelf(bookshelf)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex)
);
