import React from "react";
import Redirect from "react-router-dom/Redirect";


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
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
        this.props.signup(this.state)
      }
    
      render() {
        if (this.props.errors.length > 0) {
          return (
          <div>

            <Redirect to="/signup" />

          </div>
          )
        } else {
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
                placeholder="Email"/>
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
}

export default SignupForm;