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

const App = () => (
  <div>
     <Route path="/" exact component={WelcomeContainer} />
     <Route exact path='/books' component={BookIndexContainer}/>
    <Route path='/books/:bookId' component={BookShowContainer} /> 
    <Route path='/authors/:authorId' component={AuthorShowContainer} /> 

    <AuthRoute exact path="/signup" component={SignupOnlyContainer} />
    <AuthRoute exact path="/login" component={LoginOnlyContainer} />
    <ProtectedRoute exact path="/home" component={HomeContainer}/>
  </div>
);

export default App;