import React, { Component } from "react";
import HomeNav from "../home/home_nav";
import ReviewIndex from "../reviews/review_index";
import ReviewForm from "../reviews/review_form";
import Footer from "../footer";

class BookShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.state,
      klass: "dropdown-content2",
      btnName: "Want to Read",
      btnClass: "want",
      title: "",
      klass1: "class1",
      klass2: "class2",
      book: this.props.book,
      bookshelves: [],
      result: {},
      styleShelf: "nn2",
      emina: true,
    };
    this.handleBtn = this.handleBtn.bind(this);
    this.btnNameHandler = this.btnNameHandler.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }


  componentDidMount() {
    this.props.fetchBooks().then(() => {
      this.setState({book: this.props.book})
      const booking = this.props.book.bookshelves;
      const users = [];
      booking.map((match) => {
        if (match.user_id === this.props.user.id) {
          users.push(match);
        }
      });
      if (users.length !== 0) {
        this.setState({ btnClass: "want2" });
        this.setState({ btnName: "Read" });
        users.forEach((shelfing) => {
          if (shelfing.title === "Want to Read") {
            this.setState({ btnName: "Want to Read" });
          } else if (shelfing.title === "Currently Reading") {
            this.setState({ btnName: "Currently Reading" });
          } else if (shelfing.title === "Read") {
            this.setState({ btnName: "Read" });
          }
        });
      }
    });
    this.props
      .fetchBookshelves()
      .then(() => this.setState({ bookshelves: this.props.bookshelves }));
  }

  handleBtn(e) {
    e.preventDefault();
    if (this.state.klass === "dropdown-content2") {
      this.setState({ klass: "show2" });
    } else {
      this.setState({ klass: "dropdown-content2" });
    }
  }

  handleInput() {
    return (e) => {
      this.setState({ title: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .addBookshelf({
        user_id: this.props.user.id,
        title: this.state.title,
      })
      .then(
        (shelf) => {
          const newList = [
            ...this.state.bookshelves,
            shelf.bookshelf.bookshelf,
          ];
          this.setState({
            title: "",
            bookshelves: newList,
            klass1: "class1",
            klass2: "class2",
          });
        },
        () => alert(this.props.errorsShelf[0])
      );
  }
  

  toggle(e) {
    e.preventDefault();
    if (this.state.klass1 === "class1" && this.state.klass2 === "class2") {
      this.setState({ klass1: "class2", klass2: "class1" });
    } else {
      this.setState({ klass1: "class1", klass2: "class2" });
    }
  }

  btnNameHandler(e) {
    e.preventDefault();
    this.setState({ btnClass: "want2" });
  }

  addBooking(title, id, bookId) {
    if (!this.state.result[id]) {
      this.state.result[id] = title;
      if (this.state.btnClass === "want") {
        this.setState({ btnName: "Read", btnClass: "want2" });
      }
      const shelves = Object.values(this.state.bookshelves);
      const arr = [];
      shelves.map((shelf) => {
        if (shelf.user_id === this.props.user.id && shelf.title === title) {
          arr.push(shelf);
        }
      });
      const booking = { book_id: this.props.book.id, bookshelf_id: arr[0].id };
      this.props.addBooking(booking);
    } else {
      let obj = Object.assign({}, this.state.result);
      delete obj[id];
      this.setState({result: obj}, () => {this.props.destroyBooking(bookId, id)})
    }
  }

  handleClick(title) {
    this.setState({ btnName: title, btnClass: "want2" });
    const shelves = Object.values(this.state.bookshelves);
    const arr = [];
    shelves.map((shelf) => {
      if (shelf.user_id === this.props.user.id && shelf.title === title) {
        arr.push(shelf);
      }
    });
    const booking = { book_id: this.props.book.id, bookshelf_id: arr[0].id };
    this.props.addBooking(booking);
    this.setState({ btnName: title });
  }

  render() {
    if (this.props.books.length === 0 || !this.props.book || !this.state.book) {
      return <div>Loading...</div>;
    } else {
      const { book, user } = this.props;
      const newBook = this.state.book

      if (Object.keys(this.state.result).length === 0) {
        for (let i = 0; i < newBook.bookshelves.length; i++) {
          let shlf = newBook.bookshelves[i];
          if (shlf.user_id === user.id) {
            this.state.result[shlf.id] = shlf.title;
          }
        }
      }

      const title = ["Read", "Currently Reading", "Want to Read"];
      const bookshelfList = this.state.bookshelves.map((bookshelf) => {
        if (
          bookshelf.user_id === this.props.user.id &&
          !title.includes(bookshelf.title)
        ) {
          return (
            <li
              key={bookshelf.id}
              className={this.state.result[bookshelf.id] ? "there" : "nn2"}
              onClick={this.addBooking.bind(
                this,
                bookshelf.title,
                bookshelf.id,
                book.id
              )}
            >
              {bookshelf.title}
            </li>
          );
        }
      });
      const shelfBook = [];
      book.bookshelves.map((shelf) => {
        if (shelf.user_id === user.id) {
          shelfBook.push(shelf);
        }
      });

      return (
        <section className="book-show">
          <HomeNav
            logout={this.props.logout}
            user={this.props.user}
            searchBooks={this.props.searchBooks}
            history={this.props.history}
          />
          <div className={"show-img"}>
            <div>
              <img
                src={eval(`window.${book.book_url}`)}
                alt={book.title}
                width="150"
                height="256"
              />
              <div>
                <div
                  onClick={this.btnNameHandler}
                  className={this.state.btnClass}
                >
                  {this.state.btnName}
                </div>
                <div className={"dropdown2"}>
                  <img
                    src={window.arrow}
                    onClick={this.handleBtn}
                    className={"dropdown-btn3"}
                    width="25"
                    height="29"
                  />
                  <div className={this.state.klass}>
                    <ul>
                      <div>
                        <li
                          className={"nn2"}
                          onClick={this.handleClick.bind(this, "Read")}
                        >
                          Read
                        </li>
                        <li
                          className={"nn2"}
                          onClick={this.handleClick.bind(
                            this,
                            "Currently Reading"
                          )}
                        >
                          Currently Reading
                        </li>
                        <li
                          className={"nn2"}
                          onClick={this.handleClick.bind(this, "Want to Read")}
                        >
                          Want to Read
                        </li>
                      </div>
                      <div>
                        {bookshelfList}
                        <label onClick={this.toggle} className="nn3">
                          Add shelf
                        </label>
                        <form action="" className={this.state.klass2}>
                          <input
                            id="shelf"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleInput()}
                          />
                          <button onClick={this.handleSubmit}>Add</button>
                        </form>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={"show-title"}>
              <h2>{book.title}</h2>
              <h3>by {book.writer}</h3>
              <div>{book.description}</div>
            </div>
          </div>
          <div className="book-reviews">
            <ReviewForm
              book={book}
              user={this.props.user}
              createReview={this.props.createReview}
              changeReview={this.props.changeReview}
              history={this.props.history}
              logout={this.props.logout}
              searchBooks={this.props.searchBooks}
              shelves={Object.values(this.state.result)}
            />
            <ReviewIndex book={book} />
          </div>
          <Footer />
        </section>
      );
    }
  }
}

export default BookShow;
