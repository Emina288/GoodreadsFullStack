import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { Link } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,

    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);