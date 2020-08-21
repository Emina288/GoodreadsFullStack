import React from "react";
import StarRatingComponent from "react-star-rating-component";

class ReaviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { author, review } = this.props;

    return (
      <div className="review-item">
        <div className="image-rated">
          <img src={window.user} width="52" height="68" />
          <h2>
            <span>{author.name}</span> rated it
            <span className="users-rating">
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={review.rating}
                emptyStarColor={"rgb(173, 166, 166, 0.46)"}
              />
            </span>
          </h2>
        </div>
        <div className="item-body">{review.body}</div>
      </div>
    );
  }
}

export default ReaviewIndexItem;
