import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';
import {
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
  },
  login: user => dispatch(login(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));