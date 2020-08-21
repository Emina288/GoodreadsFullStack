import React, { Component } from "react";

import BookshelfIndexItem from "./bookshelf_index_item";
import BookShelf from "../books/book_shelf";
import HomeNav from "../home/home_nav";
import Footer from "../footer";

class BookshelfIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      klass1: "class11",
      klass2: "class2",
      button: "button",
      bookshelves: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleInput() {
    return (e) => {
      this.setState({ title: e.target.value });
    };
  }

  componentDidMount() {
    this.props.fetchBookshelves();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .addBookshelf({
        user_id: this.props.user.id,
        title: this.state.title,
      })
      .then(
        () => {
          const newList = [
            ...Object.values(this.props.bookshelves),
            {
              user_id: this.props.user.id,
              title: this.state.title,
              books_on_shelf: [],
            },
          ];
          this.setState({ title: "", bookshelves: newList });
        },
        () => alert(this.props.errors[0])
      );
  }

  toggle(e) {
    e.preventDefault();
    if (this.state.klass1 === "class11" && this.state.klass2 === "class2") {
      this.setState({ klass1: "class2", klass2: "class3", button: "none" });
    } else {
      this.setState({ klass1: "class11", klass2: "class2" });
    }
  }

  render() {
    const bookList = {};

    if (Object.values(this.props.bookshelves).length === 0) {
      return <div>Loading....</div>;
    }

    const bookshelfList = Object.values(this.props.bookshelves).map(
      (bookshelf) => {
        if (bookshelf.books_on_shelf) {
          bookshelf.books_on_shelf.map((book) => (bookList[book.id] = book));
          return (
            <BookshelfIndexItem
              key={bookshelf.id + 1}
              bookshelf={bookshelf}
              history={this.props.history}
              books={bookshelf.books_on_shelf}
            />
          );
        } else {
          bookshelf.bookshelf.books_on_shelf.map(
            (book) => (bookList[book.id] = book)
          );
          return (
            <BookshelfIndexItem
              key={bookshelf.id + 1}
              bookshelf={bookshelf.bookshelf}
              history={this.props.history}
              books={bookshelf.bookshelf.books_on_shelf}
            />
          );
        }
      }
    );

    return (
      <div>
        <header>
          <HomeNav
            logout={this.props.logout}
            user={this.props.user}
            searchBooks={this.props.searchBooks}
            history={this.props.history}
          />
        </header>
        <div className="shelves-index">
          <div className="shelf-title">
            <h2>My Books</h2>
          </div>
          <div className="all-shelf">
            <div className="shelves-all">
              <div className="shelves">
                <h3>Bookshelves</h3>
                <a href="#/bookshelves">
                  All ({Object.values(bookList).length})
                </a>
                <span className="list">{bookshelfList}</span>
              </div>
              <div className={this.state.button}>
                <button onClick={this.toggle} className={this.state.klass1}>
                  Add shelf
                </button>
              </div>
              <form action="" className={this.state.klass2}>
                <label>Add a Shelf:</label>
                <input
                  id="shelf"
                  type="text"
                  value={this.state.title}
                  onChange={this.handleInput()}
                />
                <button onClick={this.handleSubmit}>add</button>
              </form>
            </div>
            <div className="shelves-books">
              <div className="header">
                <div className="header-cover">cover</div>
                <div className="header-title">title</div>
                <div className="header-author">author</div>
                <div className="header-rating">rating</div>
                <div className="header-shelf">shelves</div>
                <div className="header-review">review</div>
              </div>
              <ul className="shelf-book">
                {Object.values(bookList).length === 0 ? (
                  <div className="no-items">No matching items!</div>
                ) : (
                  <div>
                    {Object.values(bookList).map((book) => {
                      return (
                        <BookShelf
                          key={book.id}
                          book={book}
                          history={this.props.history}
                          user={this.props.user}
                          createReview={this.props.createReview}
                          shelves={this.props.bookshelves}
                        />
                      );
                    })}
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BookshelfIndex;
