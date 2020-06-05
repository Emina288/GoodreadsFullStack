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
import Footer from "./footer";


const App = () => (
  <div>
    
    <Route path="/" exact component={WelcomeContainer} />
    <AuthRoute exact path="/signup" component={SignupOnlyContainer} />
    <AuthRoute exact path="/login" component={LoginOnlyContainer} />
    
    
    
    <Footer />
    
  </div>
);

export default App;