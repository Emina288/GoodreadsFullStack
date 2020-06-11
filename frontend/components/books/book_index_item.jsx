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
        <div className={"item-img"}> 
          <div className={"item-title"}>
          <h2>{book.title}</h2>
          <h3>By {book.writer}</h3>
          <a href={`/#/books/${book.id}`}>Click here to read more...</a>
          </div>
          <div>
          <img  src={eval(`window.${book.book_url}`)} alt={book.title} onClick={this.handleClick} width="269"/>
          </div>
        </div>
      </div>
    );
  }
}

export default BookIndexItem;