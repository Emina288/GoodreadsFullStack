import React from "react";
import { Link } from 'react-router-dom';

class AuthorShow extends React.Component {
    componentDidMount() {
        this.props.fetchAuthor(this.props.match.params.authorId); 
    }

    render() {
        return (
            <>
                <Link to='/'>Go back</Link>
            </>
        );
    }
}

export default AuthorShow;