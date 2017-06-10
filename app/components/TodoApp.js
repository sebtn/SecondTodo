import React, {Component} from 'react'
import PropTypes from 'prop-types'
import uuid from 'node-uuid'

import TodoList from './TodoList'
import AddTodo from './AddTodo'
import TodoSearch from './TodoSearch'
	
'use strict'

export default class TodoApp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'Walk the dog',
					completed: false,
				},
				{	
					id: uuid(),
					text: 'Clean the yard',
					completed: false,
				},
				{	
					id: uuid(),
					text: 'Clean the trash',
					completed: true,
				},	
				{	
					id: uuid(),
					text: 'Build reactor',
					completed: false,
				},		
				{	
					id: uuid(),
					text: 'Explore with acid',
					completed: false,
				}		
			]
		}
	}

/*--------------------------------------------------------------*/
	handlerAddTodo = (text) => {
		this.setState({
			todos: 
			[
				...this.state.todos, 
				{ id: uuid(), text: text, completed: false }
			],
		})
	}

/*--------------------------------------------------------------*/
componentWillUpdate(nextProps, nextState) {
	// console.log(this.props.onSetText())

}

/*--------------------------------------------------------------*/
handleToggle = (id) => {
	let updatedTodos = this.state.todos.map( (todo) => {
		if (todo.id === id){ todo.completed = !todo.completed }
		return todo
	})
	this.setState({todos: updatedTodos})
}

/*--------------------------------------------------------------*/
handleSearch = (showCompleted, searchText) => {
	this.setState({
		showCompleted: showCompleted,
		searchText: searchText.toLowerCase()
	})
}

/*--------------------------------------------------------------*/
	render() {
		return(
			<div className='main-container'>
				<h1>ToDO App built with ReactJs and caffeine</h1>
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-4"></div>
					<div className="col-sm-6 col-md-6 col-lg-4 text-center">
						<TodoSearch onSearch={this.handleSearch}/>
						<TodoList todos={this.state.todos} onToggle={this.handleToggle}/>
						<AddTodo onSetText={this.handlerAddTodo} />
					</div>
					<div className="col-sm-3 col-md-3 col-lg-4"></div>
				</div>
			</div>
		)	
	}
}