import React from "react";
import { Link } from 'react-router-dom';

class AuthorShow extends React.Component {


    componentDidMount() {
        this.props.fetchAuthor(this.props.match.params.authorId); 
    }


  componentDidUpdate(prevProps) {
    if (prevProps.match.params.authorId !== this.props.match.params.authorId) {
      this.props.fetchAuthor(this.props.match.params.authorId);
    }
  }


    render() {
        const { author } = this.props

        if (!author) return (
            <h1>No authors here</h1>
          );

        return (
            <div>
                <p>{author.name}</p>
            </div>
        );
    }
}

export default AuthorShow;