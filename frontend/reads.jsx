import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
// import { searchBooks } from "./util/book_api_util";
// import * as ACTIONS from "./actions/author_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  // window.searchBooks = searchBooks
  // let store = configureStore()
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.search = BOOKACTIONS.searchBooks;
 


  // window.fetchBooks = BooksAPIUtil.fetchBooks;
  // window.fetchAuthor = AuthorAPIUtil.fetchAuthor;
  // window.fetchAuthors = AuthorAPIUtil.fetchAuthors;
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