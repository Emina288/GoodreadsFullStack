import {
  RECEIVE_NEW_REVIEW,
  REMOVE_REVIEW,
} from "../actions/review_action";

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_NEW_REVIEW:
      newState = [...newState, action.review];
      return newState;
    case REMOVE_REVIEW:
      newState = newState.filter(
        (review) => action.reviewId !== review._id
      );
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;
