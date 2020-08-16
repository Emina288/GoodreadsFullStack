import { connect } from "react-redux";
import { withRouter } from "react-router";

import RatingForm from "./rating_form";
import { fetchBooks } from "../../actions/book_actions";
import { logout } from "../../actions/session_actions";
import { searchBooks } from "../../actions/book_actions";
import { createNewReview } from "../../actions/review_action";

const mapStateToProps = (state, ownProps) => {
  const bookId = ownProps.match.params.bookId;
  const book = state.entities.books[bookId];
  return {
    book,
    user: state.entities.users[state.session.id],
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchBooks()),
    logout: () => dispatch(logout()),
    createReview: (review) => dispatch(createNewReview(review)),
    searchBooks: (keyword) => dispatch(searchBooks(keyword)),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RatingForm)
);
