import React, {Component} from 'react'
import PropTypes from 'prop-types'

'use strict'

export default class TodoSearch extends Component {
/*--------------------------------------------------------------*/
	handleSearch = () => {
		let searchText = this.refs.searchText.value
		let showCompleted = this.refs.showCompleted.checked

		this.props.onSearch(showCompleted, searchText)
	}

/*--------------------------------------------------------------*/
	render() {
		return(
			<div className="search-container">
				<div className="form-group" onChange={this.handleSearch}>
				    <input ref="searchText" className="form-control" type="search" placeholder="Search Todos"  />
				    <div className="form-check">
					    <label className="custom-control custom-checkbox">
				        <input ref="showCompleted" className="custom-control-input" type="checkbox" onChange={this.handleSearch} />
				        <span className="custom-control-indicator"></span>
				        <span className="custom-control-description">Show completed ...</span>
					    </label>
				    </div>
				</div>
			</div>
		)	
	}
}