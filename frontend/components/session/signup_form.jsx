import React from "react";
import Redirect from "react-router-dom/Redirect";
import {
  Route,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


class SignupForm extends React.Component {
    constructor(props) {
       
        super(props);
        console.log(this.props);
        this.state = {name: "", email: "", password: ""};
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInput(type) {
        return (e) => {
          this.setState({ [type]: e.target.value });
        }
      }
    
      handleSubmit(e) {
       
      const form = document.getElementById("signup-form");
       if (form.checkValidity()) {
        e.preventDefault();
        const history = this.props.history;
        this.props.signup(this.state).then(null, () => history.push('/signup'))
       } 


      }
    
      render() {
        return (
          <div className="splash-signup">
            <form id="signup-form">
              <h3 id={"new"}>New here? Create a free account!</h3>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleInput('name')}
                className="signup-input-boxes" 
                placeholder="Name"/>
            <input
                type="email"
                value={this.state.email}
                className="signup-input-boxes" 
                onChange={this.handleInput('email')}
                placeholder="Email address"
                required />
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')} 
                className="signup-input-boxes" 
                placeholder="Password"
                pattern="[A-Za-z0-9]{6,}" title="Password has to be longer that 6 char" required  />
              <input type="submit" onClick={this.handleSubmit} className="signup-submit" value="Sign up" />
            </form>
          </div>
        )
      }
}

export default SignupForm;