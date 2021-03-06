import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'

import TodoApp from '../../components/TodoApp'

'use strict'

describe('Component TodoApp', () => {
	
	it('Test #1: Component TodoApp should exist', () => {
		expect(TodoApp).toExist()
	})

	it('Test #2: it should add item to todoState using hanldeAddTodo', () => {
		let todoText = 'Test text'
		let todoAppMock = TestUtils.renderIntoDocument(<TodoApp />)

		todoAppMock.setState({ todos: [] })
		todoAppMock.handlerAddTodo(todoText)

		expect(todoAppMock.state.todos[0].text).toBe(todoText)
		expect(todoAppMock.state.todos[0].createdAt).toBeA('number')
	})

	it('Test# 4: handleToggle method should toggle completed', () => {
		let todoDummy = {
			id: 15,
			text: 'Some text here',
			completed: false,
			createdAt: 0,
			completedAt: undefined
		}
		let todoApp = TestUtils.renderIntoDocument(<TodoApp />)
		todoApp.setState({todos: [todoDummy] })

		expect(todoApp.state.todos[0].completed).toBe(false)
		todoApp.handleToggle(todoDummy.id)
		expect(todoApp.state.todos[0].completed).toBe(true)
		expect(todoApp.state.todos[0].completedAt).toBeA('number')

	})

	it('Test# 5: handleToggle method should toggle completed to incomplete', () => {
		let todoDummy = {
			id: 15,
			text: 'Some text here',
			completed: true,
			createdAt: 0,
			completedAt: 1233
		}
		let todoApp = TestUtils.renderIntoDocument(<TodoApp />)
		todoApp.setState({todos: [todoDummy] })

		expect(todoApp.state.todos[0].completed).toBe(true)
		todoApp.handleToggle(todoDummy.id)
		expect(todoApp.state.todos[0].completed).toBe(false)
		expect(todoApp.state.todos[0].completedAt).toNotExist()
	})

})