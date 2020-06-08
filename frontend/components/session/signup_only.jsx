import React from "react";

class SignupOnly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "", email: "", password: ""};
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleSubmitDemo = this.handleSubmitDemo.bind(this);

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

      handleSubmitDemo(e) {
        
        e.preventDefault();


       this.props.login({email: "demo@demo.com", name: "Demo", password: 12345678});

      }


      renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                <p>{error}</p>
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
          let klass;
          if (this.props.errors.length > 0) {
            klass = "errors"
          } else {
            klass = "no-errors"
          }
          return (
            <div className={"signup-only"}>
             <img src={window.bookrow} className={"book-row"}/>
              <a href={"/"} className={"title2"}>
                    <img src={window.title} width="197" height="43" />
              </a>
            <form className={"signup-only-form"}>
            <h1 >
                Sign up to Goodreads
              </h1>

              <input type="submit" onClick={this.handleSubmitDemo} className={"btns"} value="Demo" />

               <br/>
                <img src={window.or} width="250" height="30px" />

            <div className={klass}>
                {this.renderErrors()}
              </div>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleInput('name')}
                className="signup-input-boxes" 
                placeholder="Name"
                className={"signup-only-boxes"}/>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
                className="signup-input-boxes" 
                className={"signup-only-boxes"}/>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')} 
                className="signup-input-boxes" 
                className={"signup-only-boxes"}
                 />
              <button onClick={this.handleSubmit} className={"signup-only-btn"}>Sign up</button>
              <br/>
                <br/>
                <div className={"member"}>
                  Already a member? 
                <a href="/#/login">  Sign in</a>
                </div>
            </form>
          </div>
        )
      }
    }
}

export default SignupOnly;