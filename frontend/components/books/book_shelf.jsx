import React from "react";

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
      pathname: "/rating",
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
        if (shelf.books_on_shelf.includes(book)) {
            bookShelf.push(shelf)
        }
    })

    const titles = bookShelf.map(shelf => {
        return (
            <li key={shelf.id}>{shelf.title}</li>
        )

    })

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
            <div className="books-rating">
              <h3>{users.rating}</h3>
            </div>
            <div className="books-shelves">
              <ul className="list-shelf">{titles}</ul>
            </div>
            <div className="rating-books">
              {users.body !== "" ? (
                <h3>{users.body}</h3>
              ) : (
                <span className="rating-form" onClick={this.handleReview}>Write a review</span>
              )}
            </div>
          </div>
        ) : (
          <div className="book-info">
            <div className="books-rating">
              <h3>0</h3>
            </div>
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
