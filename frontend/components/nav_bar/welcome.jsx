import React from "react";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.user) {
            return (
                <div>
                    <h1>
                        "Logged in!"
                    </h1>
                </div>
            )
        } else {
            return(
            <div> 
                <LoginFormContainer />
                <SignupFormContainer />
            </div>
            )
        }
    }
}

export default Welcome;