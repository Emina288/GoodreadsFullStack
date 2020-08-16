import React, { Component } from 'react';

import BookIndexItem from './book_index_item';


class BookIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

    render() {   
      if (this.props.books.length === 0) {
          return (
              <span>Getting all books....</span>
          )
      }
      
      const bookList = this.props.books.map(book => {
          return <BookIndexItem key={book.id} book={book} history={this.props.history}/>
      });

      return (
          <div className={"books-index"}>
              <div>
              {bookList}
              </div>
          </div>
      )
  }
}

export default BookIndex;
