import React, { Component } from "react";

import BookIndexItem from "./book_index_item";

class BookIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const val = this.props.location.search.split("=")[1];
    if (val) {
      this.props.searchBooks(val);
    } else {
      this.props.fetchBooks();
    }
  }

  render() {
    if (this.props.books.length === 0) {
      return <span>Getting all books....</span>;
    }

    if (this.props.errors2.length !== 0) {
      return (
        <div>
          <div>
            <span className="no-result">No results.</span>
          </div>
          <div className={"search-errors"}>
            <div>
              <p>Looking for a book?</p>
              <ul>
                <li>
                  Search by both title and author, and double-check the
                  spelling.
                </li>
                <li>Try searching by ISBN.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    const bookList = this.props.books.map((book) => {
      return (
        <BookIndexItem key={book.id} book={book} history={this.props.history} />
      );
    });

    return (
      <div className={"books-index"}>
        <div>{bookList}</div>
      </div>
    );
  }
}

export default BookIndex;
