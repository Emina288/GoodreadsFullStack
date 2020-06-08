export const fetchBooks = () => {
    return (
        $.ajax ({
            url: 'api/books',
            method: 'GET'
        })
    )
};

export const fetchBook = bookId => {
    return (
        $.ajax ({
            url: `/api/books/${bookId}`,
            method: 'GET'
        })
    )
};
