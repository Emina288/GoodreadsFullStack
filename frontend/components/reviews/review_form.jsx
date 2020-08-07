import React, { Component } from "react";
import { Link } from "react-router-dom";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
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

  render() {
    const {user, book} = this.props
    console.log(this.props)
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
}

export default ReviewForm;
