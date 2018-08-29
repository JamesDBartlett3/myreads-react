import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
	state = {
		query: '',
		results: []
	}

	updateQuery = (query) => {
		this.setState({query})
		this.getResults(query)
	}

	getResults = (q) => {
		if (q) {
			BooksAPI.search(q).then(results => {
				if (results.error) {
					this.setState({results: []})
				} else {
					this.setState({results})
				}
			})
		} else {this.setState({results: []})}
	}

	render() {
		return(
			<div className="search-books">
	          <div className="search-books-bar">
	            <Link
					to="/"
					className="close-search"
				>Close</Link>
	            <div className="search-books-input-wrapper">
	              <input
					  type="text"
					  placeholder="Search by title or author"
					  value={this.state.query}
					  onChange={(e) => this.updateQuery(e.target.value)}
				  />
	            </div>
	          </div>
	          <div className="search-books-results">
	            <ol className="books-grid">
					{this.state.results.map(r => {
						let shelf = 'none'
						this.props.books.map(b => (
							b.id === r.id ?
								shelf = b.shelf : ''
						))
						return (
							<li key={r.id}>
								<Book
									book={r}
									changeShelf={this.props.changeShelf}
									currentShelf={shelf}
								/>
							</li>
						)
					})}
				</ol>
	          </div>
	        </div>
		)
	}
}

export default Search
