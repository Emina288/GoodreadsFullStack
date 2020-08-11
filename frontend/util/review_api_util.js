export const createReview = (review) => {
  return $.ajax({
    method: "post",
    url: `/api/reviews`,
    data: { review },
  });
};

export const removeReview = (reviewId) => {
  return $.ajax({
    method: "delete",
    url: `api/reviews/${reviewId}`,
    data: { reviewId },
  });
};

export const editReview = (reviewId,review) => {
  return $.ajax({
    method: "patch",
    url: `api/reviews/${reviewId}`,
    data: { review },
  });
};
