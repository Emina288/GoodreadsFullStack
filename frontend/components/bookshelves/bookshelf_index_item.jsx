import React from "react";

class BookshelfIndexItem extends React.Component {
    constructor(props) {
        super(props);

        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     const bookshelfId = this.props.bookshelf.id;
    //     this.props.history.push(`/books/${bookId}`);
    // }


    render() {
        const { bookshelf } = this.props;
        return (
            <div>
                <a className="shelf-item" href="/#">{bookshelf.title}</a>
            </div>
        );
    }
}

export default BookshelfIndexItem;