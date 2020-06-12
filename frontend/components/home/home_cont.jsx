import React from "react";
import BookIndexContainer from "../books/book_index_container";

class HomeCont extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
        }
        this.search = this.search.bind(this);
    }

    search(keyword) {
        this.props.searchBooks(keyword);
        this.setState({searchValue: ""})
    }


    render() {
        return(

            <div className="color" >
                <img src={window.home} width="200" height="95"/>
                <form className={"example2"}  onSubmit={(e) => {
                            e.preventDefault()
                            this.search(this.state.searchValue)}
                        }>
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
           </div>
        )
    }
}

export default HomeCont;