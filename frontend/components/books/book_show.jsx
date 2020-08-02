import React, { Component } from "react";
import HomeNav from "../search/nav_search";

class BookShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      klass: "dropdown-content2",
      btnName: "Want to Read",
      btnClass: "want",
      title: "",
      klass1: "class1",
      klass2: "class2",
      book: this.props.book,
      bookshelves: this.props.user.bookshelves,
    };
    this.handleBtn = this.handleBtn.bind(this);
    this.btnNameHandler = this.btnNameHandler.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId);
    this.props.fetchBookshelves();
    const booking = this.props.book.bookshelves;
    if (booking.length !== 0) {
      this.setState({ btnClass: "want2" });
      booking.forEach((shelfing) => {
        if (shelfing.title === "Want to Read") {
          this.setState({ btnName: "Want to Read" });
        } else if (shelfing.title === "Currently Reading") {
          this.setState({ btnName: "Currently Reading" });
        } else {
          this.setState({ btnName: "Read" });
        }
      });
    }
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
    this.props.addBookshelf({
      user_id: this.props.user.id,
      title: this.state.title,
    });
    const newList = [
      ...this.state.bookshelves,
      { user_id: this.props.user.id, title: this.state.title },
    ];
    this.setState({ title: "", bookshelves: newList });
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

  addBooking(title) {
    this.setState({ btnName: "Read", btnClass: "want2" });
    const shelves = Object.values(this.state.bookshelves);
    const arr = [];
    shelves.map((shelf) => {
      if (shelf.user_id === this.props.user.id && shelf.title === title) {
        arr.push(shelf);
      }
    });
    const booking = { book_id: this.props.book.id, bookshelf_id: arr[0].id };
    this.props.addBooking(booking);
  }

  render() {
    const { book } = this.state;
    if (!book) {
      return <div>Loading...</div>;
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
            className={"shelf-list"}
            onClick={this.addBooking.bind(this, bookshelf.title)}
          >
            {bookshelf.title}
          </li>
        );
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
              <button
                onClick={this.btnNameHandler}
                className={this.state.btnClass}
                width="110"
              >
                {this.state.btnName}
              </button>
              <div className={"dropdown2"}>
                <img
                  src={window.arrow}
                  onClick={this.handleBtn}
                  className={"dropdown-btn3"}
                  width="25"
                  height="30"
                />
                <div className={this.state.klass}>
                  <ul>
                    <div>
                      <li className={"nn2"}>
                        <a href="https://github.com/Emina288" className={"nn2"}>
                          Read
                        </a>
                      </li>
                      <li className={"nn2"}>
                        <a
                          href="https://www.linkedin.com/in/emina-ramovic-858835187/"
                          className={"nn2"}
                        >
                          Currently Reading
                        </a>
                      </li>
                      <li className={"nn2"}>
                        <a
                          href="https://angel.co/u/emina-ramovic"
                          className={"nn2"}
                        >
                          Want to Read
                        </a>
                      </li>
                    </div>
                    <div>
                      {bookshelfList}
                      <button
                        onClick={this.toggle}
                        className={this.state.klass1}
                      >
                        Add shelf
                      </button>
                      <form action="" className={this.state.klass2}>
                        <label for="shelf">Add a Shelf:</label>
                        <input
                          id="shelf"
                          type="text"
                          value={this.state.title}
                          onChange={this.handleInput()}
                        />
                        <button onClick={this.handleSubmit}>add</button>
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
            <p>{book.description}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default BookShow;
