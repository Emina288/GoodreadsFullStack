import React from "react";
import HomeNav from "./home_nav";
import HomeCont from "./home_cont";

import {connect} from 'react-redux';
import { login, logout } from "../../actions/session_actions";

class HomeWithoutLoginProps extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header >
                    <HomeNav logout ={this.props.logout} user={this.props.user}/>
                </header>

                    <HomeCont />
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.id],
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user))
});

const HomeWithLoginProps = connect(mapStateToProps, mapDispatchToProps)(HomeWithoutLoginProps);

export default HomeWithLoginProps;