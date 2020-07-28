import React from "react";
import BookshelfIndexContainer from "../bookshelves/bookshelf_index_container";

class HomeCont extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
        }
        this.search = this.search.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    search(keyword) {
        this.props.searchBooks(keyword);
        this.setState({searchValue: ""})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/search?q=${this.state.searchValue}`)
    }


    render() {
        return(

            <div className="color" >
                <img src={window.home} width="200" height="95"/>
                <form className={"example2"}   onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Search books" 
                    value={this.state.searchValue}
                    onChange={event => {
                      this.setState({ searchValue: event.target.value })
                    }}                   
                    />
                    <button type="submit" ><i className={"fa fa-search"}> </i></button>
                </form>
                <BookshelfIndexContainer />
           </div>
        )
    }
}

export default HomeCont;