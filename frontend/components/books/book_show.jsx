import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ShowNav from "../search/nav_search";


class BookShow extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchBook(this.props.match.params.bookId);
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/search?q=${this.state.searchValue}`)
}

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
      this.props.fetchBook(this.props.match.params.bookId);
    }
  }

  render() {
    const { book } = this.props;
    return (
      <section className="book-show">
        <ShowNav logout ={this.props.logout} user={this.props.user} searchBooks={this.props.searchBooks} history={this.props.history}/>
        <div className={"show-img"}>
          <div>
          <img src={eval(`window.${book.book_url}`)} alt={book.title} width="150" height="256"/>
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
