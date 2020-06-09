import { connect } from 'react-redux';

import AuthorShow from './author_show';
import { fetchAuthor } from '../../actions/author_actions';


const mapStateToProps = (state, ownProps) => {
    const authorId = ownProps.match.params.authorId
    const author = state.entities.authors[authorId] || {}
    return {
        author
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBook: (authorId) => dispatch(fetchAuthor(authorId)) 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorShow);