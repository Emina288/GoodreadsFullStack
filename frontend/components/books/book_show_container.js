import { connect } from 'react-redux';
import {withRouter} from 'react-router';

import BookShow from './book_show';
import { fetchBook } from '../../actions/book_actions';


const mapStateToProps = (state, ownProps) => {
    const bookId = ownProps.match.params.bookId;
    const book = state.entities.books[bookId];
    return {
        book
    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchBook: (bookId) => dispatch(fetchBook(bookId)) 
    };
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(BookShow));