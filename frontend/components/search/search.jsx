import React from "react";
import BookIndexContainer from "../books/book_index_container";
import LoginFormContainer from "../session/login_form_container";
import Footer from "../footer";
import SearchNav from "./nav_search";

class Search extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { user } = this.props

        if (user) {
            return (
                <div>
                    <SearchNav logout ={this.props.logout} user={this.props.user} searchBooks={this.props.searchBooks} history={this.props.history}/>
                    <BookIndexContainer />
                    <Footer />
                </div>
            )
        } 

        return (
            <div>
                
                <SearchNav logout ={this.props.logout} user={this.props.user} searchBooks={this.props.searchBooks} history={this.props.history}/>
                <BookIndexContainer />
                <Footer />

            </div>
        )
    }
}

export default Search;