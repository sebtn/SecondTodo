import React, {Component} from 'react'
import PropTypes from 'prop-types'

'use strict'

export default class Todo extends Component {

	render() {
		return(
			<div className="test-container">
				<p>Todo Element</p>
				<p>{this.props.text}</p>
			</div>
		)	
	}
}