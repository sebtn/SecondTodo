import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import $ from 'jquery'

/*Imports components*/
import Todo from '../../components/Todo'
import TodoList from '../../components/TodoList'
import TodoApp from '../../components/TodoApp'
import AddTodo from '../../components/AddTodo'


'use strict'
/*require all modules ending in "_test" from the
current directory and all subdirectories*/
let testsContext = require.context(".", true, /_test$/)
testsContext.keys().forEach(testsContext)

/*Begin tests*/

/*--------------------------------------------------------------*/
/*Main: app Component*/
describe('Main App', () => {

	it('app should be testable', () => {
		expect(1).toBe(1)
	})

})

/*--------------------------------------------------------------*/
/*Component Todo*/
describe('Component Todo', () => {

	it('Test #1: Component Todo should exist', () => {
		expect(Todo).toExist()
	})

})

/*--------------------------------------------------------------*/
/*Component TodoList*/
describe('Component TodoList', () => {

	it('Test #1: Component TodoList should exist', () =>  {
		expect(TodoList).toExist()
	})

		it('Test#2: should render one Todo for each item in TodoList array', () => {
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

})

/*--------------------------------------------------------------*/
/*Component AddToDo*/
describe('Component Add To Do ', () => {

	it('Test #1: Component should exist', () => {
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



