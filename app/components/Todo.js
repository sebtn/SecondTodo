import React, {Component} from 'react'
import PropTypes from 'prop-types'

'use strict'

export default class Todo extends Component {

	render() {
		return(
			<div className="test-container">
				<br/>
				<p>{this.props.id} {this.props.text}</p>
			</div>
		)	
	}
}