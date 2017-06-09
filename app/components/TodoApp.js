import React, {Component} from 'react'
import PropTypes from 'prop-types'

import TodoList from './TodoList'
import AddTodo from './AddTodo'

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
				},	
				{	
					id: 4,
					text: 'Build reactor'
				}	,		
				{	
					id: 5,
					text: 'Explore with acid'
				}		
			]
		}
	}

/*--------------------------------------------------------------*/
	handlerAddTodo = (text) => {
		alert('New Todo added: ' + text)

	}

/*--------------------------------------------------------------*/
componentWillUpdate(nextProps, nextState) {
	// console.log(this.props.onSetText())

}

/*--------------------------------------------------------------*/
	render() {
		return(
			<div className='main-container'>
				<div className="row">
				<div className="col-sm-3 col-md-6 col-lg-4"></div>
				<div className="col-sm-6 col-md-6 col-lg-4 text-center">
					<TodoList todos={this.state.todos} />
					<AddTodo onSetText={this.handlerAddTodo} />
				</div>
				<div className="col-sm-3 col-md-6 col-lg-4"></div>
				</div>
			</div>
		)	
	}
}