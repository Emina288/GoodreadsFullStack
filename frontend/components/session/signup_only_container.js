import React from "react";
import { connect } from "react-redux";
import { logout, signup } from "../../actions/session_actions";
import SignupOnly from "./signup_only";
import { Link } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id],
        errors: state.errors.session,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signup(user)),
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupOnly);