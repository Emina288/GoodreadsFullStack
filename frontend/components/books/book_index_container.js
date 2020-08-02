import { connect } from "react-redux";
import { withRouter } from "react-router";
import BookIndex from "./book_index";
import { fetchBooks } from "../../actions/book_actions";

const mapStateToProps = (state) => ({
  books: Object.values(state.entities.books),
});

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookIndex)
);
