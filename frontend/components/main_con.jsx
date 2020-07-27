import React from "react";


class MainContent extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }

    componentDidMount() {

       this.props.fetchBooks();
    }

    handleClick () {
        const bookId = this.props.book.id;
        this.props.history.push(`/books/${bookId}`);
      }

    render() {
        if (this.props.books.length < 8) {
            return (
                <span>Getting all books....</span>
            )
        }

        const book1 = this.props.books[0];
        const book2 = this.props.books[1];
        const book3 = this.props.books[2];
        const book7 = this.props.books[6];

        const book4 = this.props.books[3];
        const book5 = this.props.books[4];
        const book6 = this.props.books[5];
        const book8 = this.props.books[7];

        // let showContent = false, book1,book2,book3,book4,book5,book6,book7,book8

        // if (this.props.books.length >= 8) {

          // showContent = true;

          //  book1 = this.props.books[0];
          //  book2 = this.props.books[1];
          //  book3 = this.props.books[2];
          //  book7 = this.props.books[6];
  
          //  book4 = this.props.books[3];
          //  book5 = this.props.books[4];
          //  book6 = this.props.books[5];
          //  book8 = this.props.books[7];
          
        // }
        
        return (
            <div className={"splash-content"}>
                <div className={"splash-head"}> 
                    <div>
                        <h2>Deciding what to read next?</h2>
                        <p>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
                    </div>

                    <div>
                        <h2>What are your friends reading?</h2>
                        <p>Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.</p>
                    </div>
                </div>

              <div className={"content-box"}>
                <h2>What will you discover?</h2>
                <div className={"emina"}>
                <div className={"emina-img"}>
                <div>
                <h3>
                  Because Emina liked... 
                 </h3>
                 <br/>
                    <img className={"arr3"} src={eval(`window.${book1.book_url}`)} alt={book1.title} onClick={() => this.props.history.push(`/books/${book1.id}`)} height="122" width="82"/>
                    <img className={"arr3"} src={eval(`window.${book2.book_url}`)} alt={book2.title} onClick={() => this.props.history.push(`/books/${book2.id}`)} height="122" width="82"/>
                    <img className={"arr3"} src={eval(`window.${book7.book_url}`)} alt={book7.title} onClick={() => this.props.history.push(`/books/${book7.id}`)} height="122" width="82"/>
                    <img  src={window.arr} className={"arrow"} />
                </div>
                <div>
                <h3>
                  She discovered:
                </h3>
                <br/>
               
                <p className={"da"}>Psychology,
                <br/> Science,
                <br/> Nature</p>
                    <img className={"arr3"} src={eval(`window.${book3.book_url}`)} alt={book3.title} onClick={() => this.props.history.push(`/books/${book3.id}`)} height="122" width="82"/>
                </div>
                </div>
                </div>

                <div className={"emina"}>
                <div className={"emina-img"}>
                <div>
                <h3>
                  Because Gloria liked... 
                 </h3>
                 <br/>
                    <img className={"arr3"} src={eval(`window.${book4.book_url}`)} alt={book4.title} onClick={() => this.props.history.push(`/books/${book4.id}`)} height="122" width="82"/>
                    <img className={"arr3"} src={eval(`window.${book5.book_url}`)} alt={book5.title} onClick={() => this.props.history.push(`/books/${book5.id}`)} height="122" width="82"/>
                    <img className={"arr3"} src={eval(`window.${book8.book_url}`)} alt={book8.title} onClick={() => this.props.history.push(`/books/${book8.id}`)} height="122" width="82"/>
                    <img src={window.arr} className={"arrow"}/>
                </div>
                <div>
                <h3>
                  She discovered:
                </h3>
                <br/>
                <p className={"da"}>Decision-making,
                <br/> Sociology, 
                <br/> Marketing </p>
                    <img className={"arr3"} src={eval(`window.${book6.book_url}`)} alt={book6.title} onClick={() => this.props.history.push(`/books/${book6.id}`)} height="122" width="82"/>
                </div>
                </div>
                </div>
            </div>
            </div>
              
        )
    }

}

export default MainContent;