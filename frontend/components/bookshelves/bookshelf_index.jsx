import React, { Component } from 'react';

import BookshelfIndexItem from './bookshelf_index_item';


class BookshelfIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {title: "", klass1: "class1", klass2: "class2"}
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this.props.fetchBookshelves();
    }

    handleInput() {
        return (e) => {
            this.setState({ title: e.target.value });
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.addBookshelf({user_id:this.props.current.id, title: this.state.title})
        setTimeout(function () { window.location.reload(); }, 500);

    }

    toggle(e) {
        e.preventDefault();
        if (this.state.klass1 === "class1" && this.state.klass2 === "class2") {
            this.setState({klass1: "class2", klass2: "class1"})
        } else {
            this.setState({ klass1: "class1", klass2: "class2" })
        }
    }

    render() {
        if (this.props.bookshelves.length === 0) {
            return (
                <span>Getting all bookshelves....</span>
            )
        }

        const bookshelfList = this.props.bookshelves.map(bookshelf => {
            if(bookshelf.user_id === this.props.current.id) {
            return <BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf} history={this.props.history} />
            }
        });

        return (
            <div>
                <div>
                    <a className="shelf-item" href="/#">All</a>
                    {bookshelfList}
                </div>
                <button onClick={this.toggle} className={this.state.klass1}>Add shelf</button>
                <form action="" className={this.state.klass2}>
                    <label for="shelf">Add a Shelf:</label>
                    <input
                     id="shelf" 
                     type="text" 
                     value={this.state.title}
                     onChange={this.handleInput()} 
                     />
                    <button onClick={this.handleSubmit}>add</button>
                </form>
            </div>
        )
    }
}

export default BookshelfIndex;