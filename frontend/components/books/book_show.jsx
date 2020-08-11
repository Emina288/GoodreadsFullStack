import React, { Component } from "react";
import HomeNav from "../search/nav_search";
import ReviewIndex from "../reviews/review_index";
import ReviewForm from "../reviews/review_form";

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
    this.props.fetchBooks().then(() => {
    const booking = this.props.book.bookshelves;
    if (booking.length !== 0) {
      this.setState({ btnClass: "want2" });
      this.setState({ btnName: "Read" });
      booking.forEach((shelfing) => {
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
    const arr1 = [];
    shelves.map((shelf) => {
      if (shelf.user_id === this.props.user.id && shelf.title === title) {
        arr.push(shelf);
      }
      if (shelf.user_id === this.props.user.id && shelf.title === "Read") {
        arr1.push(shelf);
      }
    });
    const booking = { book_id: this.props.book.id, bookshelf_id: arr[0].id };
    const booking1 = { book_id: this.props.book.id, bookshelf_id: arr1[0].id };
    this.props.addBooking(booking);
    this.props.addBooking(booking1);
  }

  handleClick(title) {
    this.setState({ btnName: title, btnClass: "want2" });
    const shelves = Object.values(this.state.bookshelves);
    const arr = [];
    const arr2 = [];
    shelves.map((shelf) => {
      if (shelf.user_id === this.props.user.id && shelf.title === title) {
        arr.push(shelf);
      }
    });
    const booking = { book_id: this.props.book.id, bookshelf_id: arr[0].id };
    this.props.addBooking(booking);
    this.setState({btnName: title})
  }

  render() {
    if (this.props.books.length === 0 || !this.props.book) {
      return (
        <div>Loading...</div>
      )
    } else {
    const { book, user } = this.props;
    console.log(book, user)

    const title = ["Read", "Currently Reading", "Want to Read"];
    const bookshelfList = user.bookshelves.map((bookshelf) => {
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
        <div className="book-reviews">
          <h2>COMMUNITY REVIEWS</h2>
          <ReviewForm
            book={book}
            user={this.props.user}
            createReview={this.props.createReview}
            changeReview={this.props.changeReview}
            history={this.props.history}
          />
          <ReviewIndex book={book} deleteReview={this.props.deleteReview} />
        </div>
      </section>
    );
                        }
  }
}

export default BookShow;
