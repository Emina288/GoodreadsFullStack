import React from "react";
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import { login, logout } from "../../actions/session_actions";
import { searchBooks } from "../../actions/book_actions";
import Search from "./search";

const mapStateToProps = (state) => ({
    user: state.entities.users[state.session.id],
    session: state.session,
    errors: state.errors.search,
  });
  
  const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
    searchBooks: keyword => dispatch(searchBooks(keyword))
  });
  
 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
  
