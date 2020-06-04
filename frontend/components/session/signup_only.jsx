import React from "react";

class SignupOnly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "", email: "", password: ""};
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);

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

      renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                <p>{error}</p>
                <p>dadadad</p>
              </li>
            ))}
          </ul>
        );
      }
    
      render() {
        if (this.props.user) {
            return (
                <div>
                    <p>Hello {this.props.user.name}</p>
                    <button onClick={this.props.logout}>Sign out!</button>
                </div>
            )
        } else {
          return (
            <div>
              {this.renderErrors()}
            <form>
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
              <button onClick={this.handleSubmit} className="signupbox">Sign up</button>
            </form>
          </div>
        )
      }
    }
}

export default SignupOnly;