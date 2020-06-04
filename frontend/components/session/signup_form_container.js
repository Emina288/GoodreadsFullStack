import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
// import { Link } from "react-router-dom";
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

const mapDispatchToProps = (dispatch, ownProps) => ({

  signup: user => {
    return(
      dispatch(signup(user))
    )
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));