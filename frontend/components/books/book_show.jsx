import React, { Component } from 'react';
import { Route } from 'react-router-dom';


class BookShow extends Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
      this.props.fetchBook(this.props.match.params.bookId);
    }
  }

  render() {
    const { book } = this.props;

    if (!book) return (
      <h1>No books here</h1>
    );

    return (
      <section className="book-show">
        <figure>
          <img src={eval(`window.${book.book_url}`)} alt={book.title} />
        </figure>
        <ul>
          <li>
            <h2>{book.title}</h2>
          </li>
          <li>About this book: {book.description}</li>
          <li>Author: {book.author_id}</li>
        </ul>
        
      </section>
    );
  }
}

export default BookShow;