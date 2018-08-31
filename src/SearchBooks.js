import React, {Component} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BooksList from "./BooksList.js";

class SearchBooks extends Component{
    

    handleChange = (data) => {
        this.props.handleChange(data.trim());
    };

    
    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                onChange={(e) => this.handleChange(e.target.value)}
                            />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.id} className="contact-list-item">
                                <BooksList
                                    book={book}
                                    handleChange={this.props.handleChange} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks;


