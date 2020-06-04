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


const App = () => (
  <div>
    
    <Route path="/" exact component={WelcomeContainer} />
    <Route path="/signup" exact component={SignupOnlyContainer} />
    <Route path="/login" exact component={LoginOnlyContainer} />
    
    
    
  </div>
);

export default App;