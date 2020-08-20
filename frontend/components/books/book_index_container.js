import { connect } from "react-redux";
import { withRouter } from "react-router";
import BookIndex from "./book_index";
import { fetchBooks, searchBooks } from "../../actions/book_actions";

const mapStateToProps = (state) => ({
  books: Object.values(state.entities.books),
  errors2: state.errors.search,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
  searchBooks: (keyword) => dispatch(searchBooks(keyword)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookIndex)
);
