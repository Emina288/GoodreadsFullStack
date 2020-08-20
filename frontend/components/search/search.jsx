import React from "react";
import BookIndexContainer from "../books/book_index_container";
import Footer from "../footer";
import SearchNav from "./nav_search";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          searchValue: "",
          errors: {},
          key: "all"
        };
        this.search = this.search.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.search = this.search.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.search(this.state.searchValue)

    }

    search(keyword) {
        const key = this.state.key
        const word = key+"-"+keyword
        this.props.searchBooks(word);
        this.setState({searchValue: ""})
    }

    componentDidMount() {
      const val = this.props.location.search.split("=")[1]
        if (val) {
            this.props.searchBooks(val)
        } 
    }

    mainPart() {
        return (
          <div className={"main-search"}>
            <div>
              <h1>Search</h1>
            </div>
            <div className={"border"}>
              <div className={"form-search"}>
                <form className={"example3"} onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    placeholder="Search by Book Title, Author, or ISBN"
                    value={this.state.searchValue}
                    onChange={(event) => {
                      this.setState({ searchValue: event.target.value });
                    }}
                  />
                  <button type="submit">Search</button>
                </form>
                <input
                  onClick={() => this.setState({ key: "all" })}
                  type="radio"
                  id="all"
                  value="all"
                  name="search"
                />
                <label for="all">all</label>
                <input
                  onClick={() => this.setState({ key: "title" })}
                  type="radio"
                  id="title"
                  value="title"
                  name="search"
                />
                <label for="title">title</label>
                <input
                  onClick={() => this.setState({ key: "author" })}
                  type="radio"
                  id="author"
                  value="author"
                  name="search"
                />
                <label for="author">author</label>
                <input
                  onClick={() => this.setState({ key: "isbn" })}
                  type="radio"
                  id="genre"
                  value="genre"
                  name="search"
                />
                <label for="genre">ISBN</label>
              </div>
            </div>
            <div>
              <BookIndexContainer />
            </div>
          </div>
        );
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <SearchNav logout ={this.props.logout} user={this.props.user} searchBooks={this.props.searchBooks} history={this.props.history}/>
                {this.mainPart()}
                <Footer />
            </div>
        )
    }
}

export default Search;