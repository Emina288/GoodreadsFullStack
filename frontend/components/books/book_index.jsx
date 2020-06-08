import React from 'react';

class BookIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        if (this.props.books.length === 0) {
            return (
                <span>No books</span>
            )
        }
        
        const bookList = this.props.books.map(book => {
            return <li key={book.id}>{book.title}</li>
        });

        return (
            <>
                <h3>All the books!</h3>
                <ul>
                    {bookList}
                </ul>
            </>
        )
    }
}
export default BookIndex;