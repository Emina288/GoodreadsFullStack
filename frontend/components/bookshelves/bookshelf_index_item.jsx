import React from "react";

class BookshelfIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const bookshelfId = this.props.bookshelf.id;
    this.props.history.push(`/bookshelves/${bookshelfId}`);
  }

  render() {
    const { bookshelf, books } = this.props;
    const number = books.length;
    return (
      <div className={"shelf"}>
        <div>
          <li
            key={bookshelf.id}
            className="shelf-item"
            onClick={this.handleClick}
          >
            {bookshelf.title} ({number})
          </li>
        </div>
      </div>
    );
  }
}

export default BookshelfIndexItem;
