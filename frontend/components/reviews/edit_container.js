import { connect } from "react-redux";
import { withRouter } from "react-router";

import EditRatingForm from "./edit_rating";
import { fetchBooks } from "../../actions/book_actions";
import { logout } from "../../actions/session_actions";
import { searchBooks } from "../../actions/book_actions";
import {
  changeReview,
} from "../../actions/review_action";

const mapStateToProps = (state, ownProps) => {
  const reviewId = ownProps.match.params.ratingId;
  const bookId = ownProps.match.params.bookId;
  const book = state.entities.books[bookId];
  let review;
  const user = state.entities.users[state.session.id];
  book.reviews.map((userReview) => {
      if (userReview.id == reviewId) {
          review = userReview
      }
  });
  return {
    review,
    book,
    user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchBooks()),
    logout: () => dispatch(logout()),
    changeReview: (id, review) => dispatch(changeReview(id, review)),
    searchBooks: (keyword) => dispatch(searchBooks(keyword)),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditRatingForm)
);
