import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import $ from 'jquery'

/*Import components*/
import Todo from '../../components/Todo'
import TodoList from '../../components/TodoList'
import TodoApp from '../../components/TodoApp'
import AddTodo from '../../components/AddTodo'
import TodoSearch from '../../components/TodoSearch'
import TodoApi from '../../api/TodoApi'

'use strict'
/*require all modules ending in "_test" from the
current directory and all subdirectories*/
let testsContext = require.context(".", true, /_test$/)
testsContext.keys().forEach(testsContext)

/*Begin tests*/
/*--------------------------------------------------------------*/
/*Main: app Component*/
describe('Main App', () => {

	it('The App should be testable', () => {
		expect(1).toBe(1)
	})

})

/*Test todoAPI*/
/*--------------------------------------------------------------*/
describe('TodoApi component', () => {

	beforeEach( () => {
		localStorage.removeItem('todos')
	})

	it('Test #1: Api should exists', () => {
		expect(TodoApi).toExist()
	})

	it('test #2: getTodos should return empty array for bad storage', () => {
		let actualTodos = TodoApi.getTodos()
		expect(actualTodos).toEqual([])
	})

	it('test #3: getTodos should return valid array for proper storage', () => {
		let todos = [{
			id: 23,
			text: 'some text',
			completed: false
		}]
		localStorage.setItem('todos', JSON.stringify(todos))
		let actualTodos = TodoApi.getTodos()

		expect(actualTodos).toEqual(todos)
	})

	it('test #4: setTodos should set valid array todos', () => {
		let todos = [{
			id: 23,
			text: 'some text',
			completed: false
		}]
		TodoApi.setTodos(todos)
		let actualTodos = JSON.parse(localStorage.getItem('todos'))

		expect(actualTodos).toEqual(todos)
	})

	it('test #5: setTodos should NOT set invalid array todos', () => {
		let badTodos = {dummy: 'dummy'} 
		TodoApi.setTodos(badTodos)

		expect(localStorage.getItem('todos')).toBe(null)
	})

	describe('Nest #1: Filter todo method', () => {
		let todos = [{
			id: 1,
			text: 'some string text',
			completed: false,
			}, {
			id: 2,
			text: 'some string text another time',
			completed: true,
			}, {
			id: 3,
			text: 'some string text a third time',
			completed: true,
			}
		]

		it('Test #1: showCompleted will return all items if completed props is true', () => {
			let filteredTodos = TodoApi.filterTodos(todos, true, '')

			expect(filteredTodos.length).toBe(3)
		})

		it('Test #2: showCompleted should return NOT all items if completed is false', () => {
			let filteredTodos = TodoApi.filterTodos(todos, false, '')

			expect(filteredTodos.length).toBe(1)
		})

	})

})

/*--------------------------------------------------------------*/
/*Component Todo*/
describe('Component Todo', () => {

	it('Test #1: Component Todo should exist', () => {
		expect(Todo).toExist()
	})

	it('Test #2: it should call onToggle prop with OnClick', () => {
		let todoDummy = {
			id: 155,
			text: 'Some text here',
			completed: true
		}
		let spy = expect.createSpy()
		let todoComponent = TestUtils.renderIntoDocument(<Todo {...todoDummy} onToggle={spy} />)
		let $el = $(ReactDOM.findDOMNode(todoComponent))
		/*verify OnClick is getting passed from the first div 
		in the component*/
		TestUtils.Simulate.click($el[0])
		/*passing id onToggle using the spread to inject the props in the component*/
		expect(spy).toHaveBeenCalledWith(155)
	})

})

/*--------------------------------------------------------------*/
/*Component TodoList*/
describe('Component TodoList', () => {

	it('Test #1: Component TodoList should exist', () =>  {
		expect(TodoList).toExist()
	})

	it('Test #2: should render one Todo for each item in TodoList array', () => {
		let todos = [
			{id:1, text:'Some text for item 1'},
			{id:2, text:'some text for item 2' }
		]
		/*from dom */
		let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />)
		let todosRendered = TestUtils.scryRenderedComponentsWithType(todoList, Todo)

		expect(todos.length).toBe(todosRendered.length)
	})

})

/*--------------------------------------------------------------*/
/*Component TodoApp*/
describe('Component TodoApp', () => {

	it('Test #1: Component TodoApp should exist', () =>  {
		expect(TodoApp).toExist()
	})

	it('Test #2: it should add item to todoState using hanldeAddTodo', () => {
		let todoText = 'Test text'
		let todoAppMock = TestUtils.renderIntoDocument(<TodoApp />)

		todoAppMock.setState({ todos: [] })
		todoAppMock.handlerAddTodo(todoText)

		expect(todoAppMock.state.todos[0].text).toBe(todoText)
	})

	it('Test #3: handleToggle method should toggle completed prop', () => {
		let todoDummy = {
			id: 15,
			text: 'Some text here',
			completed: false 
		}
		let todoApp = TestUtils.renderIntoDocument(<TodoApp />)
		todoApp.setState({todos: [todoDummy] })

		expect(todoApp.state.todos[0].completed).toBe(false)
		todoApp.handleToggle(todoDummy.id)		
		expect(todoApp.state.todos[0].completed).toBe(true)
	})

})

/*--------------------------------------------------------------*/
/*Component TodoAdd*/
describe('Component ToDo ', () => {

	it('Test #1: Component AddToDo should exist', () => {
		expect(AddTodo).toExist()
	})

	it('Test #2: onSetText should accept only defined strings', () => {
		let spy = expect.createSpy()
		let textInForm = TestUtils.renderIntoDocument(<AddTodo onSetText={spy} />)
		let $el = $(ReactDOM.findDOMNode(textInForm))

		textInForm.refs.todoPassed.value = 'Defined string'
		TestUtils.Simulate.submit($el.find('form')[0])

		expect(spy).toHaveBeenCalledWith('Defined string')
	})

	it('Test #3: onSetText should NOT accept undefined strings', () => {
		let spy = expect.createSpy()
		let textInForm = TestUtils.renderIntoDocument(<AddTodo onSetText={spy} />)
		let $el = $(ReactDOM.findDOMNode(textInForm))

		textInForm.refs.todoPassed.value = ''
		TestUtils.Simulate.submit($el.find('form')[0])

		expect(spy).toNotHaveBeenCalled()
	})

})

/*--------------------------------------------------------------*/
/*Component TodoSearch*/
describe('Component TodoSearch exists', () => {
	
	it('test #1: verifies the component exists', () => {
		expect(TodoSearch).toBe(TodoSearch)
	})

	it('test #2: onSearch should get called with input text on search bar', () => {
		let spy = expect.createSpy()
		let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />)
		let searchText = 'Acid test'

		todoSearch.refs.searchText.value = searchText
		TestUtils.Simulate.change(todoSearch.refs.searchText)

		expect(spy).toHaveBeenCalledWith(false, 'Acid test')
	})

	it('test #3: should called onSearch with proper value ', () => {
		let spy = expect.createSpy()
		let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />)
		let showCompleted = false

		todoSearch.refs.showCompleted.checked = showCompleted
		TestUtils.Simulate.change(todoSearch.refs.showCompleted)

		expect(spy).toHaveBeenCalledWith(false, '')
	})

})	


