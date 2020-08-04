import React, { Component } from 'react';

import BookshelfIndexItem from './bookshelf_index_item';
import BookIndexItem from "../books/book_index_item";
import HomeNav from '../home/home_nav';
import Footer from '../footer';


class BookshelfIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {title: "", klass1: "class1", klass2: "class2", bookshelves: this.props.user.bookshelves}
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleInput() {
        return (e) => {
            this.setState({ title: e.target.value });
        }
    };

    componentDidMount() {
        this.props.fetchBookshelves();
        this.props.fetchBooks();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addBookshelf({user_id:this.props.user.id, title: this.state.title})
        const newList = [...this.state.bookshelves, { user_id: this.props.user.id, title: this.state.title }]
        this.setState({title: "", bookshelves: newList})
    }

    toggle(e) {
        e.preventDefault();
        if (this.state.klass1 === "class1" && this.state.klass2 === "class2") {
            this.setState({klass1: "class2", klass2: "class1"})
        } else {
            this.setState({ klass1: "class1", klass2: "class2" })
        }
    }

    render() {
        const bookList = {};
        const bookshelfList = this.state.bookshelves.map(bookshelf => {
            if (!this.props.bookshelves) {
                return "Loading..."
            } else {
            const books = this.props.bookshelves[bookshelf.id];
            if (books) {
                  books.books_on_shelf.map((book) => (bookList[book.id] = book));
                   return (
                     <BookshelfIndexItem
                       key={bookshelf.id}
                       bookshelf={bookshelf}
                       history={this.props.history}
                       books={books.books_on_shelf}
                     />
                   );
            }
        }});

        console.log(bookList)

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
            <div>
              <div>
                <div>
                  <h2>My Books</h2>
                  <a className="shelf-item" href="/#">
                    All({Object.values(bookList).length})
                  </a>
                  {bookshelfList}
                </div>
                <button onClick={this.toggle} className={this.state.klass1}>
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
              <div>
                <ul className="shelf-book">
                  {Object.values(bookList).map((book) => {
                    return <BookIndexItem book={book} history={this.props.history} />;
                  })}
                </ul>
              </div>
            </div>
            <Footer />
          </div>
        );
    }
}

export default BookshelfIndex;