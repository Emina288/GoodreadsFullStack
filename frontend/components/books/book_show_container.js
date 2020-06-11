import { connect } from 'react-redux';
import {withRouter} from 'react-router';

import BookShow from './book_show';
import { fetchBook } from '../../actions/book_actions';
import { login, logout } from "../../actions/session_actions";
import { searchBooks } from "../../actions/book_actions";


const mapStateToProps = (state, ownProps) => {
    const bookId = ownProps.match.params.bookId;
    const book = state.entities.books[bookId];
    return {
        book,
        user: state.entities.users[state.session.id],
        session: state.session,
        errors: state.errors.search,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchBook: (bookId) => dispatch(fetchBook(bookId)),
        logout: () => dispatch(logout()),
        login: user => dispatch(login(user)),
        searchBooks: keyword => dispatch(searchBooks(keyword)) 
    };
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(BookShow));