import React from "react";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import Logo from "./head-title.png";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.session;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login({email: "demo@demo.com", name: "Demo", password: 12345678});
    }

    render() {
        if (this.props.user) {
            return (
                <div>
                    <p>Hello {this.props.user.name}</p>
                    <button onClick={this.props.logout}>Sign out!</button>
                </div>
            )
        } else {
            return(
            <div className={"splash-page"}>
                <header className={"splash-header"}>
                <div className={"splash-nav-title"}>
                    goodreads<span className={"reads"}>fullstack</span>
                </div> 
                <div className={"splash-login"}>
                  <LoginFormContainer />
                </div>
                </header> 
                <p>Try out our site!:)</p>
                  <button onClick={this.handleSubmit} className={"demo-btn"}>Demo</button>
                <div className={"splash-signup-logo"}>
                    <img src={Logo} />

                <div className={"splash-signup"}>
                     <SignupFormContainer />
                </div>
                </div>
            </div>
            )
        }
    }
}

export default Welcome;