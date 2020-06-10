import React from "react";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";

import Footer from "../footer";
import MainContent from "../main_con";


class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.session;
    }

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
                     <MainContent books={this.props.books} fetchBooks={this.props.fetchBooks}  history={this.props.history} />
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