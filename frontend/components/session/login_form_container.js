import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";
import {
    Route,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(login(user))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));