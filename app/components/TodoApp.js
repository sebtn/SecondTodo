import React, {Component} from 'react'
import PropTypes from 'prop-types'

import TodoList from './TodoList'

'use strict'

export default class TodoApp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				},
				{	
					id: 2,
					text: 'Clean the yard'
				},
				{	
					id: 3,
					text: 'Clean the trash'
				}		
			]
		}
	}

	render() {
		return(
			<div>
				<TodoList todos={this.state.todos} />
			</div>
		)	
	}
}