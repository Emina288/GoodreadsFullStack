import React from "react";
import { connect } from "react-redux";
import { login, logout } from "../../actions/session_actions";
import LoginOnly from "./login_only";
import { Link } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginOnly);
