import React from "react";


class HomeNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {klass: "dropdown-content", klass2: "dropdown-btn"}
        this.handleBtn = this.handleBtn.bind(this);

    }

    handleClick(e) {
        e.preventDefault();

        this.props.logout()


    }

    handleBtn(e) {
        e.preventDefault;
        if (this.state.klass === "dropdown-content" && this.state.klass2 === "dropdown-btn" ) {
        this.setState({klass: "show", klass2: "dropdown-btn2"});
        } else {
            this.setState({klass: "dropdown-content", klass2: "dropdown-btn"});
        }
    }



    render() {
        const user = this.props.user;
        // const logout = this.props.logout;

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
                    <img src={window.profile} onClick={this.handleBtn} className={this.state.klass2} />
                    <div className={this.state.klass} >
                        <h3>{user.name}</h3>
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