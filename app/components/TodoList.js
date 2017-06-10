import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'

'use strict'

export default class TodoList extends Component {

	renderTodos = () => {
		/*Map all the todos array, which is being passed as prop*/
		return this.props.todos.map( (todo) => {
			return (
				<Todo key={todo.id} {...todo}
				 onToggle={this.props.onToggle} />
			)
		} )
	}

/*--------------------------------------------------------------*/
	render() {
		return(
			<div className="test-container">
				{this.renderTodos()}
			</div>
		)	
	}
}