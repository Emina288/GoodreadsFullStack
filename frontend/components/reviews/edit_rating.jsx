import React, { Component } from "react";

class EditRatingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.history.location.state.users.rating,
      body: this.props.history.location.state.users.body,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRadioButton(number) {
    this.setState({ rating: number });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { user, book, users } = this.props.history.location.state;
    const review = {
      body: this.state.body,
      user_id: user.id,
      book_id: book.id,
      rating: this.state.rating,
    };
    this.props.history.location.state.changeReview(users.id,review);
    this.props.history.push(`/books/${book.id}`);
  }

  render() {
    const { book } = this.props.history.location.state;
    return (
      <div>
        <h1>{book.title} > Review > Edit</h1>
         <div className={"item-img"}>
          <img
            src={eval(`window.${book.book_url}`)}
            alt={book.title}
            onClick={this.handleClick}
            width="49"
            height="75"
          />
        </div>
        <div>
          <h2>{book.title}</h2>
        </div>
        <div>
          <h3>by {book.writer}</h3>
        </div>
          <div className="review-edit-book-review-line1">
            <div className="review-edit-book-review-line1-myreview">
              My rating:
            </div>
            <div className="review-edit-rating">
              <input
                type="radio"
                name="rating"
                id="5"
                className="review-edit-star"
                onChange={() => this.handleRadioButton(5)}
              />
              <label for="5">★</label>
              <input
                type="radio"
                name="rating"
                id="4"
                className="review-edit-star"
                onChange={() => this.handleRadioButton(4)}
              />
              <label for="4">★</label>
              <input
                type="radio"
                name="rating"
                id="3"
                className="review-edit-star"
                onChange={() => this.handleRadioButton(3)}
              />
              <label for="3">★</label>
              <input
                type="radio"
                name="rating"
                id="2"
                className="review-edit-star"
                onChange={() => this.handleRadioButton(2)}
              />
              <label for="2">★</label>
              <input
                type="radio"
                name="rating"
                id="1"
                className="review-edit-star"
                onChange={() => this.handleRadioButton(1)}
              />
              <label for="1">★</label>
            </div>
          </div>
          <h2>What did you think?</h2>
          <form>
            <textarea
              maxLength="15000"
              placeholder="Enter your review (optional)"
              rows="12"
              value={this.state.body}
              onChange={(event) => {
                this.setState({ body: event.target.value });
              }}
            ></textarea>
            <button onClick={this.handleSubmit}>Save</button>
          </form>
        </div>
     );
  }
}

export default EditRatingForm;
