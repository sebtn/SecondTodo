import React, {Component} from 'react'
import PropTypes from 'prop-types'

'use strict'

export default class AddTodo extends Component {

	onSubmit = (e) => {
		e.preventDefault()
		let text = this.refs.todoPassed.value
			/*this fires up the callback onSetText to parent
			note that is no defined, it is just declared*/
			this.props.onSetText(text)
	}

/*--------------------------------------------------------------*/
	render() {
		return(
			<div className="add-todo-container">
				<form className="Add-todo-form" onSubmit={this.onSubmit} >
				  <div className="form-group">
				    <input  type="text" className="form-control" ref="todoPassed" placeholder="Write todo" />
				    <button type="submit" className="btn btn-primary" >Add Todo</button>
				  </div>
				</form>				  
			</div>
		)	
	}
}