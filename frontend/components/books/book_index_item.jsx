import React from "react";

class BookIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const bookId = this.props.book.id;
    this.props.history.push(`/books/${bookId}`);
  }

  render() {
    const { book } = this.props;
    return (
      <div className={"book-item"}>
        <div className={"item-img2"}>
          <img
            src={eval(`window.${book.book_url}`)}
            alt={book.title}
            onClick={this.handleClick}
            width="50"
            height="77"
          />
          <div className="book-title">
            <div>
              <h2>{book.title}</h2>
            </div>
            <div className="book-writer">
              <h3>by {book.writer}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookIndexItem;
