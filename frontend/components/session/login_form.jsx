import React from "react";
import Redirect from "react-router-dom/Redirect";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    const form = document.getElementById("signin-form");
    if (form.checkValidity()) {
      e.preventDefault();
      const history = this.props.history;
      this.props.login(this.state).then(null, () => history.push("/login"));
    }
  }

  render() {
    return (
      <div>
        <form className={"signin"} id={"signin-form"}>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleInput("email")}
            className="login-input-boxes"
            placeholder="Email address"
            required
          />

          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput("password")}
            placeholder="Password"
            className="login-input-boxes"
          />

          <span className={"what"}>
            <input
              className="log-btn"
              type="submit"
              value="Sign in "
              onClick={this.handleSubmit}
            />
          </span>
        </form>
      </div>
    );
  }
}

export default LoginForm;
