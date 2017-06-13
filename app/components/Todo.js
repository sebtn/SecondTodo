import React, {Component} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

'use strict'

export default class Todo extends Component {
	render() {
/*--------------------------------------------------------------*/
		let renderedDate = () => {
			let {createdAt} = this.props
			let message = 'Created '
			let timestamp = createdAt
			
			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a') 
			}

/*--------------------------------------------------------------*/
		return(
				<div className="todo-element-container" onClick={ () => {
					this.props.onToggle(this.props.id) }}>
						<input  className="form-check-input" type="checkbox" 
						defaultChecked={this.props.completed} />
							<span className="text"> {this.props.text} </span>
							<span className="date"> <b>{renderedDate()}</b></span>
				</div>
		)	
	}
}