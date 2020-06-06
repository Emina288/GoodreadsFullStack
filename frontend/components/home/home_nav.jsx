import React from "react";


class HomeNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {klass: "dropdown-content"}
        this.handleBtn = this.handleBtn.bind(this);

    }

    handleClick(e) {
        e.preventDefault();

        this.props.logout()


    }

    handleBtn(e) {
        e.preventDefault;
        if (this.state.klass === "dropdown-content") {
        this.setState({klass: "show"});
        } else {
            this.setState({klass: "dropdown-content"});
        }
    }



    render() {
        const user = this.props.user;
        const logout = this.props.logout;

        return(
            <div className={"home-nav"}> 
                <div className={"home-title"}>
                    <a href="/#" >
                        <img src={window.title} width="197" height="43"  />
                    </a>
                </div>

                <div className={"home-books"}>
                    <a href="https://github.com/Emina288">Home</a>
                    <a href="https://github.com/Emina288">My Books</a>
                    <a href="https://github.com/Emina288">Browse</a>
                </div>

                <form className={"example"} >
                    <input type="text" placeholder="Search books" name="search2" />
                    <button type="submit"><i className={"fa fa-search"}></i></button>
                </form>

                <div className={"dropdown"}>
                    <button onClick={this.handleBtn} className={"dropdown-btn"}>Profile</button>
                    <div className={this.state.klass} >
                        <h3>Demo</h3>
                    <a href="#" onClick={this.handleClick}>Sign out! </a>
                        <a href="https://github.com/Emina288">Github</a>
                        < a href="mailto:eminaramovic@hotmail.com">Emina </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default HomeNav;