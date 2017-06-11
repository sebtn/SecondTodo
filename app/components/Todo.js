import React, {Component} from 'react'
import PropTypes from 'prop-types'

'use strict'

export default class Todo extends Component {

/*--------------------------------------------------------------*/
	render() {
		return(
				<div className="todo-element-container" onClick={ () => {
					this.props.onToggle(this.props.id) }}>
						<input  className="form-check-input" type="checkbox" 
						defaultChecked={this.props.completed} />
							<span className="text"> {this.props.text} </span>
				</div>
		)	
	}
}