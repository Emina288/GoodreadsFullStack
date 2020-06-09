import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
// import * as APIUtil from "./actions/session_actions";
import * as BooksAPIUtil from "./actions/book_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // let store;
  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  window.fetchBooks = BooksAPIUtil.fetchBooks;
  // window.fetchBook = BooksAPIUtil.fetchBook;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.login = APIUtil.login;
  // window.signup = APIUtil.signup;
  // window.logout = APIUtil.logout;
  // window.fetchUsers = APIUtil.fetchUsers;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  ReactDOM.render(<Root store={store} />, root);
});