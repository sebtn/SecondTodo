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

describe('Filter todo method', () => {
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

	it('Test #1: showCompleted should return all items where completed is true', () => {
		let filteredTodos = TodoApi.filterTodos(todos, true, '')

		expect(filteredTodos.length).toBe(3)
	})

	it('Test #2: showCompleted should return all items where completed is true', () => {
		let filteredTodos = TodoApi.filterTodos(todos, false, '')

		expect(filteredTodos.length).toBe(2)
	})

})