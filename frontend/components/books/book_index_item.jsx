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
    this.props.history.push(`/books/${bookId}`);
  }


  render() {
    const { book } = this.props;
    return (
      <div className={"book-item"}> 
        <figure>
          <img src={eval(`window.${book.book_url}`)} alt={book.title} onClick={this.handleClick} />
        </figure>
        <ul>
          <li>
            <h2>{book.title}</h2>
          </li>
          <li>Author: {book.author} </li>
          <li>About this book: {book.description}</li>
        </ul>
      </div>
    );
  }
}

export default BookIndexItem;