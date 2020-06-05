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
        e.preventDefault();
        const history = this.props.history;
        this.props.signup(this.state).then(null, () => history.push('/signup'))
      }
    
      render() {
        return (
          <div className="splash-signup">
            <form>
              <h3 id={"new"}>New here? Create a free account!</h3>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleInput('name')}
                className="signup-input-boxes" 
                placeholder="Name"/>
            <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
                className="signup-input-boxes" 
                placeholder="Email Address"/>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')} 
                className="signup-input-boxes" 
                placeholder="Password" />
              <button onClick={this.handleSubmit} className="signup-submit">Sign up</button>
            </form>
          </div>
        )
      }
}

export default SignupForm;