import React, {Component} from 'react'
import PropTypes from 'prop-types'
import uuid from 'node-uuid'

import TodoList from './TodoList'
import AddTodo from './AddTodo'

'use strict'

export default class TodoApp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: [
				{
					id: uuid(),
					text: 'Walk the dog'
				},
				{	
					id: uuid(),
					text: 'Clean the yard'
				},
				{	
					id: uuid(),
					text: 'Clean the trash'
				},	
				{	
					id: uuid(),
					text: 'Build reactor'
				}	,		
				{	
					id: uuid(),
					text: 'Explore with acid'
				}		
			]
		}
	}

/*--------------------------------------------------------------*/
	handlerAddTodo = (text) => {
		this.setState({
			todos: [
			...this.state.todos, 
			{
				id: uuid(),
				text: text,
			}
			],
		})

	}

/*--------------------------------------------------------------*/
componentWillUpdate(nextProps, nextState) {
	// console.log(this.props.onSetText())

}

/*--------------------------------------------------------------*/
	render() {
		return(
			<div className='main-container'>
				<h1>ToDO App built with ReactJs and caffeine</h1>
				<div className="row">
					<div className="col-sm-3 col-md-6 col-lg-4"></div>
					<div className="col-sm-6 col-md-6 col-lg-4 ">
						<TodoList todos={this.state.todos} />
						<AddTodo onSetText={this.handlerAddTodo} />
					</div>
					<div className="col-sm-3 col-md-6 col-lg-4"></div>
				</div>
			</div>
		)	
	}
}