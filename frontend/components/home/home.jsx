import React from "react";
import HomeNav from "./home_nav";
import HomeCont from "./home_cont";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header >
                    <HomeNav logout ={this.props.logout}/>
                </header>

                    <HomeCont /> 
            </div>
        )
    }

}

export default Home;