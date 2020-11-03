import React from "react";

class HomeCont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
    this.search = this.search.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.books = this.books.bind(this);
  }

  componentDidMount() {
    this.props.fetchBookshelves();
    this.props.fetchBooks();
  }

  search(keyword) {
    const word = "all" + "-" + keyword;
    this.props.searchBooks(word);
    this.setState({ searchValue: "" });
  }

  handleSubmit(e) {
    e.preventDefault();
    const word = "all" + "-" + this.state.searchValue;
    this.props.history.push(`/search?q=${word}`);
  }

  books() {
    const books = Object.values(this.props.books);
    const empty = [];
    books.map((book) => {
      let sum = 0;
      for (let i = 0; i < book.bookshelves.length; i++) {
        if (book.bookshelves[i].user_id !== this.props.user.id) {
          sum++;
        }
      }
      if (sum === book.bookshelves.length) {
        empty.push(book);
      }
    });
    return (
      <ul>
        {empty.map((one) => {
          return (
            <div key={one.id} className={"item-img2 item2"}>
              <img
                src={eval(`window.${one.book_url}`)}
                alt={one.title}
                onClick={() => {
                  this.props.history.push(`/books/${one.id}`);
                }}
                width="150"
                height="177"
              />
              <div className="book-title book2">
                <div>
                  <h2>{one.title}</h2>
                </div>
                <div className="book-writer">
                  <h3>by {one.writer}</h3>
                </div>
                <div className="color4">{one.description}</div>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }

  render() {
    const bookshelves = Object.values(this.props.bookshelves);
    const { books } = this.props;
    if (!bookshelves && !books) {
      return <div>Loading...</div>;
    }

    const bookshelfList = bookshelves.map((bookshelf) => {
      if (bookshelf.books_on_shelf) {
        return (
          <li key={bookshelf.id}>
            <span className="number">{bookshelf.books_on_shelf.length} </span>
            <a className="shelf-item" href={`#/bookshelves/${bookshelf.id}`}>
              {bookshelf.title}
            </a>
          </li>
        );
      } else {
        return (
          <li key={bookshelf.bookshelf.id}>
            <span className="number">
              {bookshelf.bookshelf.books_on_shelf.length}{" "}
            </span>
            <a
              className="shelf-item"
              href={`#/bookshelves/${bookshelf.bookshelf.id}`}
            >
              {bookshelf.bookshelf.title}
            </a>
          </li>
        );
      }
    });

    return (
      <div className="color">
        <div className="color1">
          <img src={window.home} width="200" height="95" />
          <form className={"example2"} onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search books"
              value={this.state.searchValue}
              onChange={(event) => {
                this.setState({ searchValue: event.target.value });
              }}
            />
            <button type="submit">
              <i className={"fa fa-search"}> </i>
            </button>
          </form>
          <h3>Bookshelves</h3>
          <div className={"home-shelf"}>{bookshelfList}</div>
        </div>
        <div className="color2">
          <h3>Recommendations</h3>
          <div>{this.books()}</div>
        </div>
        <div className="color3">
          <h3>Did you know?</h3>
          <div>
            <h3>The Earliest Work of Literature</h3>
            <img src={window.first} width="140" height="120" />
            <div className="color4">
              The earliest known work of literature is an epic poem titled the
              Epic of Gilgamesh. The ancient poem is from Ancient Mesopotamia.
              Because paper books did not exist at the time, the whole tale is
              told on 12 tablets. Today, the Epic of Gilgamesh is available on a
              digital tablet or e-reader.
            </div>
          </div>
          <div>
            <h3>The Largest Book Made of Paper</h3>
            <img src={window.biggest} width="140" height="120" />
            <div className="color4">
              The world’s largest book made of paper is located in Dubai, United
              Arab Emirates. It is five meters wide, 8.06 meters long, contains
              429 pages and weighs over 3,000 pounds. The Mshahed International
              Group created giant tome, titled This the Prophet Muhamed, and
              unveiled it in February 2012.
            </div>
          </div>
          <div>
            <h3>
              The Library of Alexandria, Greatest Library of the Ancient World
            </h3>
            <img src={window.alex} width="140" height="120" />
            <div className="color4">
              The Ancient Library of Alexandria, located in Alexandria, Egypt,
              was one of the largest libraries of the ancient world. Any books
              that came into the Port of Alexandria became library property and
              the library created a copy for the owner. The Library of
              Alexandria is estimated to have housed up to 400,000 scrolls of
              text, before a fire engulfed the collection. The destruction of
              the Library of Alexandria is famed and romanticized as one of the
              greatest historical cultural losses to mankind.
            </div>
          </div>
          <div>
            <h3>The Most Expensive Book Ever</h3>
            <img src={window.money} width="140" height="120" />
            <div className="color4">
              The most expensive book in the world is a first edition of the Bay
              Psalm Book, first printed in Cambridge, Massachusetts in 1640. One
              of the first books to be printed with a press in the New World is
              The Bay Psalm Book. The pioneering book entered production merely
              a couple decades after the Pilgrims arrived at Plymouth. The Bay
              Psalm Book sold for $14,165,000 at a 2013 auction in New York.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCont;
