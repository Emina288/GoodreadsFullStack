import * as AuthorAPIUtil from "../util/author_api_util";

export const ADD_AUTHOR = "ADD_AUTHOR";
export const ADD_AUTHORS = "ADD_AUTHORS"; 

export const receiveAuthor = author => {
    return {
        type: ADD_AUTHOR,
        author
    };
};

export const receiveAuthors = () => {
    return {
        type: ADD_AUTHORS,
        books
    };
};

export const fetchAuthors = () => (dispatch) => {
    return (
        AuthorAPIUtil.fetchAuthors().then(authors => dispatch(receiveAuthors(authors)))
    )
};


export const fetchAuthor = (authorId) => (dispatch) => {
    return (
        AuthorAPIUtil.fetchAuthor(authorId).then(author => dispatch(receiveAuthor(author)))
    )
};

