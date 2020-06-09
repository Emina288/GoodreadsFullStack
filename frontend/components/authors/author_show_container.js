import { connect } from 'react-redux';

import AuthorShow from './author_show';
import { fetchAuthor } from '../../actions/author_actions';
import {withRouter} from 'react-router';


const mapStateToProps = (state, ownProps) => {
    const authorId = ownProps.match.params.authorId;
    const author = state.entities.authors[authorId];
    return {
        author
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAuthor: (authorId) => dispatch(fetchAuthor(authorId)) 
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthorShow));