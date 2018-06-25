import React from "react";
import { Link, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ShelfOfBooks from "./ShelfOfBooks.js";
import SearchBooks from "./SearchBooks.js";
import "./App.css";


class BooksApp extends React.Component {
    MAX_RESULTS = 30;

    state = {
        books: [],
        searchBooks: [],
    };

  
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
      }

    aquireShelfBooks(name){
        return this.state.books.filter((book) => book.shelf === name)
    }

    handleChange = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            this.setState(previousState => ({
                books: previousState.books.filter(b => b.id !== book.id).concat([ book ])
            }));
        });
    };

    updateQuery = (query) => {
      if(query){
          BooksAPI.search(query, this.MAX_RESULTS).then((books) => {
              
              if(books.length){
                  books.forEach((book, index) => {
                      const myBook = this.state.books.find((b) => b.id === book.id);
                      book.shelf = myBook ? myBook.shelf : 'none';
                      books[index] = book;
                  });

                  this.setState({
                      searchBooks: books
                  });
              }

          });
          } else {
          this.setState({
              searchBooks: []
          });
      }
  };

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <ShelfOfBooks
                                    title="Currently Reading"
                                    books={this.aquireShelfBooks("currentlyReading")}
                                    handleChange={this.handleChange}
                                />
                                <ShelfOfBooks
                                    title="Want to Read"
                                    books={this.aquireShelfBooks("wantToRead")}
                                    handleChange={this.handleChange}
                                />
                                <ShelfOfBooks
                                    title="Read"
                                    books={this.aquireShelfBooks("read")}
                                    handleChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="open-search">
                            <Link to="/search">Add a book</Link>
                        </div>
                    </div>
                )}/>

                <Route path="/search" render={({ history }) => (
                    <SearchBooks
                        books={this.state.searchBooks}
                        updateQuery={this.updateQuery}
                        handleChange={this.handleChange}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp
       
             
      
    
    
     
    
  
    
  
