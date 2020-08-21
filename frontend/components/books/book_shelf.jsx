import React from "react";
import StarRatingComponent from "react-star-rating-component";

class BookShelf extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleReview = this.handleReview.bind(this);
  }

  handleClick() {
    const bookId = this.props.book.id;
    this.props.history.push(`/books/${bookId}`);
  }

  handleReview() {
    this.props.history.push({
      pathname: `/rating/${this.props.book.id}`,
      state: {
        book: this.props.book,
        user: this.props.user,
        createReview: this.props.createReview,
      },
    });
  }

  render() {
    const { book, user, shelves } = this.props;

    let users;
    let bookShelf = [];
    user.reviews.map((review) => {
      if (review.book_id === book.id) {
        users = review;
      }
    });

    Object.values(shelves).map((shelf) => {
      if (shelf.books_on_shelf && shelf.books_on_shelf.includes(book)) {
        bookShelf.push(shelf);
      } else if (
        shelf.bookshelf &&
        shelf.bookshelf.books_on_shelf.includes(book)
      ) {
        bookShelf.push(shelf.bookshelf);
      }
    });

    const titles = bookShelf.map((shelf) => {
      if (shelf) {
        return <li key={shelf.id}>{shelf.title}</li>;
      }
    });

    return (
      <div className={"book-items"}>
        <div className={"item-img"}>
          <img
            src={eval(`window.${book.book_url}`)}
            alt={book.title}
            onClick={this.handleClick}
            width="50"
            height="77"
          />
        </div>
        <div className="books-title">
          <h2>{book.title}</h2>
        </div>
        <div className="books-writer">
          <h3>{book.writer}</h3>
        </div>
        {users ? (
          <div className="book-info">
            <span className="books-rating">
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={users.rating}
                emptyStarColor={"rgb(173, 166, 166, 0.46)"}
              />
            </span>
            <div className="books-shelves">
              <ul className="list-shelf">{titles}</ul>
            </div>
            <div className="rating-books">
              {users.body !== "" ? (
                <h3>{users.body}</h3>
              ) : (
                <span className="rating-form" onClick={this.handleReview}>
                  Write a review
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="book-info">
            <span className="books-rating">
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={0}
                emptyStarColor={"rgb(173, 166, 166, 0.46)"}
              />
            </span>
            <div className="books-shelves">
              <ul className="list-shelf">{titles}</ul>
            </div>
            <div className="rating-form">
              <span onClick={this.handleReview}>Write a review</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BookShelf;
