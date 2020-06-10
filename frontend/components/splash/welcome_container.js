import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Welcome from './welcome';
import { login, logout } from "../../actions/session_actions";
import { fetchBooks } from '../../actions/book_actions';


const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.id],
  session: state.session,
  books: Object.values(state.entities.books),
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user)),
  fetchBooks: () => dispatch(fetchBooks()), 
});

export default 
  withRouter(
      connect(mapStateToProps, mapDispatchToProps)(
        Welcome
      )
  );