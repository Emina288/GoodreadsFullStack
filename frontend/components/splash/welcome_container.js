import React from 'react';
import {connect} from 'react-redux';
import Welcome from './welcome';
import { login, logout } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.id],
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);