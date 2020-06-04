import React from "react";
import Redirect from "react-router-dom/Redirect";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: ""};
    
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
        this.props.login(this.state).then(null, () => history.push('/login'))
      };

     
      render() {
        return (
            <div>
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
};

export default LoginForm;