export const fetchAuthor = authorId => {
    return (
        $.ajax ({
            url:   `api/users/${authorId}`,
            method: 'GET'
        })
    )
};