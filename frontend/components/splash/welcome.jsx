import React from "react";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import Redirect from "react-router/Redirect";
import {
    Link
  } from 'react-router-dom';
  import Footer from "../footer";
  import MainContent from "../main_con";
  import Home from "../home/home";
import {login} from "../../util/session_api_util";

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.session;
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleSubmit(e) {
        
    //     e.preventDefault();


    //    this.props.login({email: "demo@demo.com", name: "Demo", password: 12345678});

        
        
        

    // }

    componentDidMount() {

        const { user, history } = this.props;

        if (user) {

            history.push("/home");

        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.user !== prevProps.user) {
            this.props.history.push("/home");

            
        }

    }    

    render() {
       
        return(
            <div className={"splash-page"}>
                <header className={"splash-header"}>

                    <div className={"spash-nav-title"}>

                <a href={"/"} className={"title"}>
                    <img src={window.title} width="197" height="43" />
                </a>
                </div>



                <div className={"splash-login"}>
                  <LoginFormContainer />
                </div>

                </header> 

                
               
                <div className={"signup"}>
          
                    <img src={window.logo} className={"logo"}/>


                <div className={"splash-signup"}>
                     <SignupFormContainer />
                </div>
                </div>

                {/* <div className={"demo"}>
                <button onClick={this.handleSubmit} className={"demo-btn"}>Demo</button>
                </div> */}

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <div>
                     <MainContent />
                 </div>

                 <footer>
  
                 <div>
                    <Footer />
                 </div>
    
                 </footer>
  

                

            </div>
        );

    }
}

export default Welcome;