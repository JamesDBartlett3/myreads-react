import React, { Component } from 'react'
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
	            <a className="close-search" onClick={() => this.setState({showSearchPage: false})}>Close</a>
	            <div className="search-books-input-wrapper">
	              {/*
	                NOTES: The search from BooksAPI is limited to a particular set of search terms.
	                You can find these search terms here:
	                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

	                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	                you don't find a specific author or title. Every search is limited by search terms.
	              */}
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
					{this.state.results.map(r => (
						<li key={r.id}>
							<Book
								book={r}
								changeShelf={this.props.changeShelf}
							/>
						</li>
					))}
				</ol>

	          </div>
	        </div>
		);
	}
}

export default Search;
