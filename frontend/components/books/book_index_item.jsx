import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';


class BookIndexItem extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    const bookId = this.props.book.id;
    console.log(bookId);
    console.log(this.props.history)
    this.props.history.push(`/books/${bookId}`);
  }

  render() {
    const { book } = this.props;
    console.log(book)
    return (
      <div>
        <figure>
          <img src={eval(`window.${book.book_url}`)} alt={book.title} onClick={this.handleClick} />
        </figure>
        <ul>
          <li>
            <h2>{book.title}</h2>
          </li>
          <li>About this book: {book.description}</li>
          <li>Author: {book.author_id}</li>
        </ul>
      </div>
    );
  }
}

export default BookIndexItem;