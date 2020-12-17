import React, { Component } from "react";

import BookshelfIndexItem from "./bookshelf_index_item";
import HomeNav from "../home/home_nav";
import Footer from "../footer";
import BookShelf from "../books/book_shelf";

class BookshelfShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      klass1: "class11",
      klass2: "class22",
      button: "button",
      bookshelves: [],
      bookshelf: this.props.bookshelf,
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
    this.props.fetchBooks();
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
          this.setState({
            title: "",
            bookshelves: newList,
            klass1: "class11",
            klass2: "class22",
            button: "button",
          });
        },
        () => alert(this.props.errors[0])
      );
  }

  toggle(e) {
    e.preventDefault();
    if (this.state.klass1 === "class11" && this.state.klass2 === "class22") {
      this.setState({ klass1: "class22", klass2: "class3", button: "none" });
    } else {
      this.setState({ klass1: "class11", klass2: "class22", button: "button" });
    }
  }

  render() {
    const bookList = {};
    const list = {};
    const listReviews = {};

    if (
      Object.values(this.props.bookshelves).length === 0 &&
      this.props.books
    ) {
      return <div>Loading....</div>;
    } else {
      const bookshelfList = Object.values(this.props.bookshelves).map(
        (bookshelf) => {
          if (bookshelf.books_on_shelf) {
            bookshelf.books_on_shelf.map((book) => {
              if (this.props.books[book.id]) {
                this.props.books[book.id].reviews.map((review) => {
                  if (review.user_id === this.props.user.id) {
                    listReviews[book.id] = review;
                  }
                });
              }

              bookList[book.id] = book;

              if (list[book.title]) {
                list[book.title].push(bookshelf.title);
              } else {
                list[book.title] = [bookshelf.title];
              }
            });

            return (
              <BookshelfIndexItem
                key={bookshelf.id + 1}
                bookshelf={bookshelf}
                history={this.props.history}
                books={bookshelf.books_on_shelf}
              />
            );
          } else if (bookshelf.bookshelf.books_on_shelf) {
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


      let newShelf = this.props.bookshelf
        ? this.props.bookshelf
        : this.props.bookshelves[undefined].bookshelf;

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
              <h2>
                My Books:{" "}
                <span className="shelf-name">
                  {newShelf.title}
                  <span className="shelf-number">
                    {" "}
                   ({ newShelf.books_on_shelf.length })
                  </span>
                </span>
              </h2>
            </div>
            <div className="all-shelf">
              <div className="shelves-all">
                <div className="shelves">
                  <h3>Bookshelves</h3>
                  <a className="shelf-item" href="#/bookshelves">
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
                  <div>
                    <input
                      id="shelf"
                      type="text"
                      value={this.state.title}
                      onChange={this.handleInput()}
                    />
                    <button onClick={this.handleSubmit}>add</button>
                  </div>
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
                  {newShelf.books_on_shelf.length === 0 ? (
                    <div className="no-items">No matching items!</div>
                  ) : (
                    <div>
                      {newShelf.books_on_shelf.map((book) => {
                        return (
                          <BookShelf
                            key={book.id}
                            book={book}
                            history={this.props.history}
                            user={this.props.user}
                            createReview={this.props.createReview}
                            shelves={this.props.bookshelves}
                            list={list}
                            listReviews={listReviews}
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
}

export default BookshelfShow;
