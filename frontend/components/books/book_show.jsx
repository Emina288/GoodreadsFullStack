import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ShowNav from "../search/nav_search";


class BookShow extends Component {
  constructor(props) {
    super(props);
  }

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
    return (
      <section className="book-show">
        <ShowNav logout ={this.props.logout} user={this.props.user} searchBooks={this.props.searchBooks} history={this.props.history}/>
        <figure>
          <img src={eval(`window.${book.book_url}`)} alt={book.title} />
        </figure>
        <ul>
          <li>
            <h2>{book.title}</h2>
          </li>
          <li>About this book: {book.description}</li>
          <li>Author: {book.writer} </li>
        </ul>
        
      </section>
    );
  }
}

export default BookShow;
