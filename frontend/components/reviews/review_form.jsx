import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.userNoReview = this.userNoReview.bind(this);
    this.userHasReview = this.userHasReview.bind(this);
  }

  onStarHover(nextValue) {
    this.setState({ rating: nextValue });
  }

  onStarHoverOut() {
    this.setState({ rating: 0 });
  }

  handleClick() {
    this.props.history.push({
      pathname: `/rating/${this.props.book.id}`,
    });
  }

  userHasReview(book, users) {
    return (
      <div className="users-review">
        <div className="active-edit">
          <h1>MY ACTIVITY</h1>
          <div
            onClick={() => {
              this.props.history.push({
                pathname: `/rating/${users.id}/${book.id}`,
              });
            }}
          >
            Edit
          </div>
        </div>
        <div className="review-title">
          <h2>Review of </h2>
          <div>{book.title}</div>
        </div>
        <div className="review-rating">
          <h2>Rating </h2>
          <div>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={users.rating}
              emptyStarColor={"rgb(173, 166, 166, 0.46)"}
            />
          </div>
        </div>
        <div className="review-shelf">
          <h2>Shelves </h2>
          <ul>
            {this.props.shelves.map((shelf) => {
              return <li key={shelf.id}> {shelf.title}</li>;
            })}
          </ul>
        </div>
        <div className="review-body">
          <h2>Review </h2>
          <div>{users.body}</div>
        </div>
        <div className="community-title">
          <h2>COMMUNITY REVIEWS</h2>
        </div>
      </div>
    );
  }

  userNoReview(user, book) {
    const { rating } = this.state;

    return (
      <div className="no-reviews">
        <div className="community-no-review">
          <h2>COMMUNITY REVIEWS</h2>
        </div>
        <div className="image-rated2">
          <img src={window.user} width="52" height="68" />
          <h2>
            <span className="rate">{user.name},</span>{" "}
            <span className="rate-it">start your review of {book.title}</span>
          </h2>
        </div>
        <div className="stars">
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={rating}
            onStarHover={this.onStarHover.bind(this)}
            onStarHoverOut={this.onStarHoverOut.bind(this)}
            emptyStarColor={"rgb(173, 166, 166, 0.46)"}
            onStarClick={this.handleClick}
          />
          <button onClick={this.handleClick}>Write a Review</button>
        </div>
      </div>
    );
  }

  render() {
    const { user, book } = this.props;
    let i = 0;
    let users;
    book.reviews.map((review) => {
      if (review.user_id === user.id) {
        i++;
        users = review;
      }
    });

    if (i === 0) {
      return this.userNoReview(user, book);
    } else {
      return this.userHasReview(book, users);
    }
  }
}

export default ReviewForm;
