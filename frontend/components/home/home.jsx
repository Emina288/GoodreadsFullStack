import React from "react";
import HomeNav from "./home_nav";
import HomeCont from "./home_cont";
import {withRouter} from 'react-router';

import {connect} from 'react-redux';
import { login, logout, signup } from "../../actions/session_actions";
import { searchBooks } from "../../actions/book_actions";
import { fetchBookshelves } from "../../actions/bookshelf_action";

class HomeWithoutLoginProps extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header >
                    <HomeNav logout ={this.props.logout} user={this.props.user} searchBooks={this.props.searchBooks} history={this.props.history}/>
                </header>

                    <HomeCont logout ={this.props.logout} user={this.props.user} searchBooks={this.props.searchBooks} history={this.props.history} bookshelves={this.props.bookshelves} fetchBookshelves={this.props.fetchBookshelves}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.id],
  session: state.session,
  bookshelves: state.bookshelves
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  searchBooks: (keyword) => dispatch(searchBooks(keyword)),
  fetchBookshelves: () => dispatch(fetchBookshelves()),
});

const HomeWithLoginProps = withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeWithoutLoginProps));

export default HomeWithLoginProps;