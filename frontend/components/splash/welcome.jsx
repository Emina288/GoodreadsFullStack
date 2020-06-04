import React from "react";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import Logo from "./head-title.png";
import Redirect from "react-router/Redirect";
import Title from "./tit.png";
import {
    Link
  } from 'react-router-dom';

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

                    <div className={"spash-nav-title"}>

                <a href={"/"} className={"title"}>
                    <img src={Title} />
                </a>
                </div>



                <div className={"splash-login"}>
                  <LoginFormContainer />
                </div>

                </header> 

                
               
                <div className={"signup"}>
          
                    <img src={Logo} className={"logo"}/>


                <div className={"splash-signup"}>
                     <SignupFormContainer />
                </div>
                </div>
                <p>Try out our site!:)</p>
                <button onClick={this.handleSubmit} className={"demo-btn"}>Demo</button>

            </div>
            )
        }
    }
}

export default Welcome;