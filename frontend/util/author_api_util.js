export const fetchAuthor = authorId => {
    return (
        $.ajax ({
            url:   `/api/authors/${authorId}`,
            method: 'GET'
        })
    )
};

export const fetchAuthors = () => {
    return (
        $.ajax ({
            url: '/api/authors',
            method: 'GET'
        })
    )
};

