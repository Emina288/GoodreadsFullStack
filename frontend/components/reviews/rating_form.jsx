import React, { Component } from "react";
import HomeNav from "../home/home_nav";
import Footer from "../footer";
import StarRatingComponent from "react-star-rating-component";

class RatingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  onStarHover(nextValue) {
    this.setState({ rating: nextValue });
  }

  handleSubmit() {
    const { user, book } = this.props;
    const review = {
      body: this.state.body,
      user_id: user.id,
      book_id: book.id,
      rating: this.state.rating,
    };
    this.props.createReview(review);
    this.props.history.push(`/books/${book.id}`);
  }

  handleClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  render() {
    if (!this.props.book) {
      return <div>Loading...</div>;
    } 
    const {
      book,
      logout,
      user,
      history,
      searchBooks,
    } = this.props;
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
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={this.state.rating}
                onStarHover={this.onStarHover.bind(this)}
                emptyStarColor={"rgb(173, 166, 166, 0.46)"}
                onStarClick={this.handleClick}
              />
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
