import * as AuthorAPIUtil from "../util/author_api_util";

export const ADD_AUTHOR = "ADD_AUTHOR";

export const receiveAuthor = author => {
    return {
        type: ADD_AUTHOR,
        author
    };
};


export const fetchAuthor = (authorId) => (dispatch) => {
    return (
        AuthorAPIUtil.fetchAuthor(authorId).then(author => dispatch(receiveAuthor(author)))
    )
};

