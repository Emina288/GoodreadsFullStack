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
                    <img  src={window.arr} className={"arr1"} />
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
                    <img className={"arr1"} src={window.arr} className={"arr2"} />
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
        {/* // return ( */}
        //     <div>
        // {/* //    <div className={"main-cont"}>
        // //        <div className={"main"}>
        // //        <div className={"book"} >
        // //            <div  className={"books"} >
        // //            <a href="https://en.wikipedia.org/wiki/Angels_%26_Demons">
        // //            <img src={window.angels}width="269"/> 
        // //            </a>
        // //            </div>
        // //            <div className={"book-prew"}>
        // //                <h4>Angels and Demons</h4>
        // //                <br/>
        // //                <br/>
        // //                <p>When world-renowned Harvard symbologist Robert Langdon is summoned to a Swiss research facility to analyze a mysterious symbol — seared into the chest of a murdered physicist — he discovers evidence of the unimaginable: the resurgence of an ancient secret brotherhood known as the Illuminati… the most powerful underground organization ever to walk the earth.</p>
        // //            </div>
        // //         </div>
        // //            <br/>

        // //            <div className={"book"} >
        // //                <div className={"books"}> 
        // //                 <a href="https://en.wikipedia.org/wiki/The_Da_Vinci_Code">
        // //                 <img src={window.code}  width="269"/>
        // //                 </a>
        // //             </div>
        // //             <div className={"book-prew"}>
        // //                 <h4>The Da Vinci Code</h4>
        // //                 <br/>
        // //                 <br/>
        // //                 <p>While in Paris on business, Harvard symbologist Robert Langdon receives an urgent late-night phone call: the elderly curator of the Louvre has been murdered inside the museum. Near the body, police have found a baffling cipher. Solving the enigmatic riddle, Langdon is stunned to discover it leads to a trail of clues hidden in the works of da Vinci…clues visible for all to see…and yet ingeniously disguised by the painter.</p>
        // //             </div>
        // //            </div>
    
        // //            <br/>

        // //            <div className={"book"} >
        // //                <div className={"books"} >
        // //                     <a href="https://en.wikipedia.org/wiki/The_Lost_Symbol" >
        // //                     <img src={window.symbol}  width="269"/>
        // //                     </a>
        // //                     </div>
        // //                     <div className={"book-prew"}>
        // //                         <h4>The Lost Symbol</h4>
        // //                         <br/>
        // //                         <br/>
        // //                         <p>The Lost Symbol is a masterstroke of storytelling–a deadly race through a real-world labyrinth of codes, secrets, and unseen truths… all under the watchful eye of Brown’s most terrifying villain to date. Set within the hidden chambers, tunnels, and temples of Washington, D.C., The Lost Symbol accelerates through a startling landscape toward an unthinkable finale.</p>
                            
        // //                     </div>
        // //             </div>

        // //         </div> */}



        //    </div> 
        // )
    }

}

export default MainContent;