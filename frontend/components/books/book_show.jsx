import React from "react";
import { Link } from 'react-router-dom';

class BookShow extends React.Component {
    componentDidMount() {
        this.props.fetchBook(this.props.match.params.bookId); 
    }

    render() {
        return (
            <>
                <Link to='/'>Go back</Link>
            </>
        );
    }
}

export default BookShow;