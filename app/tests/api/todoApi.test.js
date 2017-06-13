import expect from 'expect'
import TodoApi from '../api/TodoApi'

describe('TodoApi component', () => {
	it('Test #1: TodoApi should exists', () => {
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
		let actualTodos = JSON.parse(localStorage.getItem('todos'))
		TodoApi.getTodos(todos)

		expect(actualTodos).toEqual(todos)
	})	

	it('test #4: setTodos should NOT set invalid array todos', () => {
		let badTodos = {dummy: 'dummy'} 
		TodoApi.setTodos(badTodos)

		expect(localStorage.getItem('todos')).toBe(null)
	})

})