import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";
import usersReducer from "../../reducers/users_reducer";

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(login(usersReducer))
    }
};

export default connect(null, mapDispatchToProps)(LoginForm);