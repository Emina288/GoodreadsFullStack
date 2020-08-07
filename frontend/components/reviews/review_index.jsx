import React, { Component } from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const book = this.props.book;
    const { reviews, reviewsUser } = this.props.book

    const reviewsList = reviews.map(review => {
      return <ReviewIndexItem key={review.id} author={reviewsUser[review.id]} review={review}/>
    });

    return (
      <div>
        <div>{reviewsList}</div>
      </div>
    );
  }
}

export default ReviewIndex;
