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
    console.log(this.props)
    return (
      <div className={"book-item"}>
        <div className={"item-img"}>
            <img
              src={eval(`window.${book.book_url}`)}
              alt={book.title}
              onClick={this.handleClick}
              width="50"
              height="77"
            />
          </div>
          <div className="book-title">
            <h2>{book.title}</h2>
          </div>
          <div className="book-writer">
            <h3>{book.writer}</h3>
        </div>
      </div>
    );
  }
}

export default BookIndexItem;
