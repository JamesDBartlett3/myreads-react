import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Main from './Main';
import Search from './Search';
import './App.css';

class BooksApp extends React.Component {
	state = {
		books: []
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
	}

	changeShelf = (book, shelf) => {
		BooksAPI.update(book, shelf);
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
	}

  	render() {
    	return (
      		<div className="app">
				<Route exact path='/' render={() => (
					<Main
						books={this.state.books}
						changeShelf={this.changeShelf}
					/>
				)} />

				<Route path='/search' render={() => (
					<Search
						books={this.state.books}
						changeShelf={this.changeShelf}
					/>
				)} />
      		</div>
  		)
  	}
}

export default BooksApp
