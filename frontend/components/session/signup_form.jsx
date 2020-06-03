import React from "react";

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
        return (
          <div className="signup-form">
            <h3>New here? Create a free account!</h3>
            
            <form>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleInput('name')} />
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')} />
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')} />
              <button onClick={this.handleSubmit}>Sign up</button>
            </form>
          </div>
        )
      }
}

export default SignupForm;