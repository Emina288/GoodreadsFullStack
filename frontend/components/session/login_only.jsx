import React from "react";

class LoginOnly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: ""};
    
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
        this.props.login(this.state)
      };

      renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
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
                <input type="text"
                  value={this.state.email}
                  onChange={this.handleInput('email')} 
                  placeholder="Email" />
      
                <input type="password"
                  value={this.state.password}
                  onChange={this.handleInput('password')} 
                  placeholder="Password"/>
      
                <button onClick={this.handleSubmit}>Sign In!</button>
              </form>
            </div>
          )
        }
    }
};

export default LoginOnly;