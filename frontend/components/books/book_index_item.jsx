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
    console.log(book)
    return (
      <div className={"book-item"}>
        <div className={"item-img"}>
            <img
              src={eval(`window.${book.book_url}`)}
              alt={book.title}
              onClick={this.handleClick}
              width="49"
              height="75"
            />
          </div>
          <div>
            <h2>{book.title}</h2>
          </div>
          <div>
            <h3>{book.writer}</h3>
        </div>
      </div>
    );
  }
}

export default BookIndexItem;
