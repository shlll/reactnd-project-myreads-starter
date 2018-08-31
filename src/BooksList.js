import React, { Component } from "react";
import PropTypes from "prop-types";
import ChangeOfShelf from "./ChangeOfShelf.js";

class BooksList extends Component{
    static propTypes = {
        book: PropTypes.object.isRequired,
        handleChange: PropTypes.func.isRequired
    };

    render(){
        const { book } = this.props;
        return(
            <div className="book" id={book.id}>
                <div className="book-top">
                    <div className="book-cover" style={{width:128, height:192, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                    <ChangeOfShelf
                        book={book}
                        handleChange={this.props.handleChange}/>
                </div>
                <div className="book-title">{book.name}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    }
}

export default BooksList;
