import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from './BooksAPI'


class ChangeOfShelf extends Component{
   

    state = {
        newShelf: this.props.book.shelf,
        update: false
    };

    handleChange = (e) => {
       this.setState({
            newShelf: e.target.value,
            update: true
        });
    };

 
   
   render(){
        return(
            <div className="book-shelf-changer">
                <select
                    value={this.state.newShelf}
                    onChange={this.handleChange}
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                { this.state.update && (<div className="cssload-spin-box"></div>)}
            </div>
        )
    }
}

export default ChangeOfShelf;
