import React, { Component } from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const book = this.props.book;
    const { reviews, reviewsUser } = book

    const reviewsList = reviews.map(review => {
      return <ReviewIndexItem key={review.id} author={reviewsUser[review.id]} review={review}/>
    });

    if (reviewsList.length === 0) {
      return (
        <div className="no-reviews">Be the first on to leave a review!</div>
      )
    } else  {
      return (
      <div className="community-reviews">
        <div>{reviewsList}</div>
      </div>
    );
      }
  }
}

export default ReviewIndex;
