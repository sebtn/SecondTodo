import React, {Component} from 'react'
import PropTypes from 'prop-types'
import uuid from 'node-uuid'
import moment from 'moment'

import TodoList from './TodoList'
import AddTodo from './AddTodo'
import TodoSearch from './TodoSearch'
import TodoApi from '../api/TodoApi'
	
'use strict'

export default class TodoApp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showCompleted: false,
			searchText: '',
			todos: TodoApi.getTodos()
		}
	}

/*--------------------------------------------------------------*/
/* ant time we make changes to the state or props, setTodos*/
	componentDidUpdate = () => {
		TodoApi.setTodos(this.state.todos)
	}

/*--------------------------------------------------------------*/
	handlerAddTodo = (text) => {
		this.setState({
			todos: 
			[
				...this.state.todos, 
				{ id: uuid(), text: text, completed: false, createdAt: moment().unix() }
			],
		})
	}

/*--------------------------------------------------------------*/
componentWillUpdate(nextProps, nextState) {


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
		let {todos, showCompleted, searchText} = this.state
		let filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText)
		return(
			<div className='main-container'>
				<h1>ToDO App built with ReactJs and caffeine</h1>
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-4"></div>
					<div className="col-sm-6 col-md-6 col-lg-4 text-center">
						<TodoSearch onSearch={this.handleSearch}/>
						<TodoList todos={filteredTodos} 
							onToggle={this.handleToggle} />
						<AddTodo onSetText={this.handlerAddTodo} />
					</div>
					<div className="col-sm-3 col-md-3 col-lg-4"></div>
				</div>
			</div>
		)	
	}
}