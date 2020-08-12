import React, { Component } from "react";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.userNoReview = this.userNoReview.bind(this);
    this.userHasReview = this.userHasReview.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: "/rating",
      state: {
        book: this.props.book,
        user: this.props.user,
        createReview: this.props.createReview,
        logout: this.props.logout,
        searchBooks: this.props.searchBooks,
      },
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
                pathname: `/rating/${users.id}`,
                state: {
                  book: this.props.book,
                  user: this.props.user,
                  changeReview: this.props.changeReview,
                  users: users,
                  logout: this.props.logout,
                  searchBooks: this.props.searchBooks,
                },
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
          <div>{users.rating}</div>
        </div>
        <div className="review-shelf">
          <h2>Shelves </h2>
          <ul>
            {this.props.shelves.map((shelf) => {
              return <li> {shelf.title}</li>;
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
          <span className="rating">
            <input id="rating5" type="radio" name="rating" value="5" />
            <label onClick={this.handleClick} for="rating5">
              5
            </label>
            <input id="rating4" type="radio" name="rating" value="4" />
            <label onClick={this.handleClick} for="rating4">
              4
            </label>
            <input id="rating3" type="radio" name="rating" value="3" />
            <label onClick={this.handleClick} for="rating3">
              3
            </label>
            <input id="rating2" type="radio" name="rating" value="2" />
            <label onClick={this.handleClick} for="rating2">
              2
            </label>
            <input id="rating1" type="radio" name="rating" value="1" />
            <label onClick={this.handleClick} for="rating1">
              1
            </label>
          </span>
          <button onClick={this.handleClick}>Write a Review</button>
        </div>
      </div>
    );
  }

  render() {
    const {user, book} = this.props
    let i = 0;
    let users;
    user.reviews.map((review) => {
      if (review.book_id === book.id) {
        i++;
        users = review
      }
    });

    if (i === 0) {
      return (
        this.userNoReview(user, book, )
        )
      } else {
      return this.userHasReview(book, users);
    }
  }
}

export default ReviewForm;
