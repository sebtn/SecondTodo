import React, {Component} from 'react'
import PropTypes from 'prop-types'

'use strict'

export default class TodoSearch extends Component {

/*--------------------------------------------------------------*/
	render() {
		return(
			<div className="search-container">
				<div className="form-group row">
				  <div className="col-12">
				    <input className="form-control" type="search" placeholder="Search Todos"  />
				    <div className="form-check">
					    <label className="form-check-label">
				        <input className="form-check-input" type="checkbox"  />
				        <p>Show completed todos </p>
					    </label>
				    </div>
				  </div>
				</div>
			</div>
		)	
	}
}