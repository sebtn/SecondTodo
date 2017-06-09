import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'

'use strict'

export default class TodoList extends Component {

	renderTodos = () => {
		let {todos} = this.props
		return todos.map( (todo) => {
			return (
				<Todo key={todo.id} {...todo}/>
			)
		} )
	}

/*------------------------------------------------------------------*/
	render() {
		return(
			<div className="test-container">
				{this.renderTodos()}
			</div>
		)	
	}
}