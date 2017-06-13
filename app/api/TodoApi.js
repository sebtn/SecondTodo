import $ from 'jquery'

/*Set and fetch items form storage*/
module.exports = {
	setTodos: function(todos)  {
		if( $.isArray(todos) ) {
			localStorage.setItem('todos', JSON.stringify(todos))
			return todos
		}
	},

	getTodos:  function() {
		let stringTodos = localStorage.getItem('todos')
		let todos = []

		try { todos =	JSON.parse(stringTodos) } 
		catch (event) { }
		
		return $.isArray(todos) ? todos : [] 
	},

	filterTodos: function (todos, showCompleted, searchText) {
		let filteredTodos = todos
		/*by show completed*/
		filteredTodos = filteredTodos.filter( (todo) => {
			return !todo.completed || showCompleted 
		})
		return filteredTodos
	}
}	