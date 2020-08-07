import * as APIUtil from "../util/review_api_util";

export const RECEIVE_NEW_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveNewReview = (review) => {
  return {
    type: RECEIVE_NEW_REVIEW,
    review: review,
  };
};

export const destroyReview = (review) => {
  return {
    type: REMOVE_REVIEW,
    reviewId: review.id,
  };
};

export const createNewReview = (review) => (dispatch) => {
  return APIUtil.createReview(review).then((review) => {
    dispatch(receiveNewReview(review));
  });
};

export const deleteReview = (reviewId) => (dispatch) => {
  return APIUtil.removeReview(reviewId).then((review) => {
    dispatch(destroyReview(review));
  });
};
