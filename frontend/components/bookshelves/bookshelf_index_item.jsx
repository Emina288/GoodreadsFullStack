import React from "react";

class BookshelfIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

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