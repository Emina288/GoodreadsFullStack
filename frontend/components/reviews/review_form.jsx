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
      },
    });
  }

  userHasReview(user, book, users) {
    return (
      <div>
        <div onClick={() => {
          this.props.history.push({
            pathname: `/rating/${users.id}`,
            state: {
              book: this.props.book,
              user: this.props.user,
              changeReview: this.props.changeReview,
              users: users
            },
          });
        } }>Edit</div>
        <h2>Review of </h2>
        <div>{book.title}</div>
        <h2>Rating </h2>
        <div>{users.rating}</div>
        <h2>Shelves </h2>
        {book.bookshelves.map(shelf => {return (<li>{shelf.title}</li>)})}
        <h2>Review </h2>
        <div>{users.body}</div> 
      </div>
    );
  }

  userNoReview(user, book) {
    return (
      <div>
        <h2>
          {user.name}, start your review of {book.title}
        </h2>
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
    
    console.log(users, "rating")
    if (i === 0) {
      return (
        this.userNoReview(user, book, )
        )
      } else {
      return this.userHasReview(user, book, users);
    }
  }
}

export default ReviewForm;
