import React from "react";
import BookIndexContainer from "../books/book_index_container";
import LoginFormContainer from "../session/login_form_container";
import Footer from "../footer";
import SearchNav from "./nav_search";
// import queryString from 'query-string'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
        }
        this.search = this.search.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.search(this.state.searchValue)

    }

    search(keyword) {
        this.props.searchBooks(keyword);
        this.setState({searchValue: ""})
    }

    componentDidMount() {
        const val = this.props.location.search.split("=")[1]
        if (val) {
            this.props.searchBooks(val)
        } 
    }

    mainPart() {
        const { errors } = this.props
        return (
            <div className={"main-search"}>
                    <div>
                    <h1>Search</h1>
                    </div>
                    <div className={"border"}>
                    <div className={"form-search"}>
                    <form className={"example3"}  onSubmit={this.handleSubmit} >
                    <input 
                    type="text" 
                    placeholder="Search by Book Title, Author, or ISBN" 
                    value={this.state.searchValue}
                    onChange={event => { this.setState({ searchValue: event.target.value })}} />
                    <button type="submit" >Search</button>
                    </form>
                    <input type="radio" id="all"  value="all" name="search"/>
                    <label for="all">all</label>
                    <input type="radio" id="title" value="title"  name="search"/> 
                     <label for="title">title</label>
                    <input type="radio" id="author" value="author"  name="search"/>
                    <label for="author">author</label>
                    <input type="radio" id="genre" value="genre"  name="search"/>
                    <label for="genre">genre</label>
                    </div>
                    </div>
                    <div>
                    {errors.length !== 0 ?
                     <div className={"search-errors"}>
                         <div>
                           <span>No results.</span>
                        </div>
                        <div>
                        <p>Looking for a book?</p>
                            <ul>
                                <li>Search by both title and author, and double-check the spelling.</li>
                                <li>Try searching by ISBN.</li>
                            </ul>
                        </div>
                    </div> :  
                    <BookIndexContainer />
                     }
                    </div>
            </div>
        )
    }


    render() {
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