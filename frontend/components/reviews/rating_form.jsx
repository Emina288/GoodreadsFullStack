import React, { Component } from "react";
import HomeNav from "../home/home_nav";
import Footer from "../footer";

class RatingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
            rating: 4,
            body: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleRadioButton(number) {
    this.setState({ rating: number });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { user, book } = this.props.history.location.state
    const review = {
      body: this.state.body,
      user_id: user.id,
      book_id: book.id,
      rating: this.state.rating,
    };
    this.props.history.location.state.createReview(review);
    this.props.history.push(`/books/${book.id}`)
  }

  render() {
    const { book, logout, user, history, searchBooks } = this.props.history.location.state;
    return (
      <div>
        <header>
          <HomeNav
            logout={logout}
            user={user}
            searchBooks={searchBooks}
            history={history}
          />
        </header>
        <div className="rating-new">
          <div className="new-rating">
            <h1>
              <span>{book.title}</span> > Review
            </h1>
            <div className={"item-img"}>
              <img
                src={eval(`window.${book.book_url}`)}
                alt={book.title}
                onClick={this.handleClick}
                width="49"
                height="75"
              />
              <div>
                <div className="rating-title">
                  <h2>{book.title}</h2>
                </div>
                <div className="rating-writer">
                  <h3>by {book.writer}</h3>
                </div>
              </div>
            </div>
            <div className="my-rating">
              <div className="my-stars">My rating:</div>
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
            <div className="text">
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
                <button onClick={this.handleSubmit}>Post</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default RatingForm;
