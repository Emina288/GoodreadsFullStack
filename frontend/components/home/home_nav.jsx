import React from "react";


class HomeNav extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = {
            klass: "dropdown-content", 
            klass2: "dropdown-btn",
            searchValue: "",
        }
        this.handleBtn = this.handleBtn.bind(this);
        this.search = this.search.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.logout()


    }

    handleBtn(e) {
        e.preventDefault();
        if (this.state.klass === "dropdown-content" && this.state.klass2 === "dropdown-btn" ) {
        this.setState({klass: "show", klass2: "dropdown-btn2"});
        } else {
            this.setState({klass: "dropdown-content", klass2: "dropdown-btn"});
        }
    }

    search(keyword) {
        this.props.searchBooks(keyword);
        this.setState({searchValue: ""})
    }

  

    render() {
        const user = this.props.user;
    

        return(
            <div className={"home-nav"}> 
                <div className={"home-title"}>
                    <a href="/#" >
                        <img src={window.title} width="197" height="43"  />
                    </a>
                </div>

                <div className={"home-books"}>
                    <a href="https://github.com/Emina288" className={"home-books-a"}>Home</a>
                    <a href="https://github.com/Emina288" className={"home-books-a"}>My Books</a>
                    <a  href="/books" className={"home-books-a"}>Browse</a>
                </div>

                <form className={"example"}  onSubmit={(e) => {
                            e.preventDefault()
                            this.search(this.state.searchValue)}
                        } >
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

                <div className={"dropdown"}>
                    <img src={window.profile} onClick={this.handleBtn} className={this.state.klass2} />
                    <div className={this.state.klass} >

                        <ul>
                        <li className={"nm"}>{user.name}</li>
                    
                        <li className={"nn"}><a href="https://github.com/Emina288" className={"nn"}>Github</a></li>
                        <li className={"nn"}>< a href="mailto:eminaramovic@hotmail.com" className={"nn"}>Emina </a></li>
                        <li className={"nn"}><a href="#" onClick={this.handleClick} className={"nn"}>Sign out! </a></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default HomeNav;