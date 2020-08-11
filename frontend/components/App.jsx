import React from "react";
import WelcomeContainer from "./splash/welcome_container";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import LoginOnlyContainer from "../components/session/login_only_container";
import SignupOnlyContainer from "../components/session/signup_only_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomeContainer from "./home/home";
import BookIndexContainer from "./books/book_index_container";
import BookShowContainer from "./books/book_show_container";
import AuthorShowContainer from "./authors/author_show_container";
import SearchContainer from "./search/search_container";
import BookshelfIndexContainer from "./bookshelves/bookshelf_index_container";
import BookshelfShowContainer from "./bookshelves/bookshelf_show_container";
import RatingForm from "./reviews/rating_form";
import EditRatingForm from "./reviews/edit_rating";

const App = () => (
  <div>
    <Route path="/" exact component={WelcomeContainer} />
    <Route exact path="/books" component={BookIndexContainer} />
    <ProtectedRoute path="/books/:bookId" component={BookShowContainer} />
    <Route path="/authors/:authorId" component={AuthorShowContainer} />
    <Route path="/search" exact component={SearchContainer} />
    <AuthRoute exact path="/signup" component={SignupOnlyContainer} />
    <AuthRoute exact path="/login" component={LoginOnlyContainer} />
    <ProtectedRoute exact path="/home" component={HomeContainer} />
    <ProtectedRoute
      exact
      path="/bookshelves"
      component={BookshelfIndexContainer}
    />
    <ProtectedRoute
      exac
      path="/bookshelves/:bookshelfId"
      component={BookshelfShowContainer}
    />
    <ProtectedRoute exact path="/rating" component={RatingForm} />
    <ProtectedRoute exac path="/rating/:ratingId" component={EditRatingForm} />
  </div>
);

export default App;