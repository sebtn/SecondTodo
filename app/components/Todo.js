import React, {Component} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

'use strict'

export default class Todo extends Component {
	render() {
		let {createdAt, completedAt, completed, text, id} = this.props
/*--------------------------------------------------------------*/
		let renderedDate = () => {
			let message = 'Created '
			let timestamp = createdAt
			
			if (completed) {
				let message = 'Completed '
				let timestamp = completedAt
				
				return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a') 
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a') 
		} 

/*--------------------------------------------------------------*/
		return(
				<div className="todo-element-container" onClick={ () => {
					this.props.onToggle(id) }}>
						<input  className="form-check-input" type="checkbox" 
						defaultChecked={completed} />
							<span className="text"> {text} </span>
							<span className="date"> {renderedDate()} </span>
				</div>
		)	
	}
}