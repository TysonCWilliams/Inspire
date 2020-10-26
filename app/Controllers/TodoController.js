import todoService from "../Services/TodoService.js";
import Todo from '../models/Todo.js'
import { ProxyState } from "../AppState.js";

//TODO Create the draw function
function _drawTodos() { 
  let template = ''
  ProxyState.todos.forEach(function(todo) {
    template += todo.Template;
  })
  document.getElementById('todo-list').innerHTML = template

}

function _updateCompletedCount() {
  let completed = ProxyState.todos.filter(todo => todo.completed == true);
  document.getElementById('completed-count').innerText = completed.length + ''
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    ProxyState.on('todos', _drawTodos)
    ProxyState.on('todos', _updateCompletedCount)
    todoService.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }

  createTodo(e) {
    e.preventDefault()
    let newTodo = {}
    newTodo.description = document.getElementById('todo-desc').value
    newTodo.id = Math.floor(Math.random() * 10000) + 1 
    console.log(newTodo)
    todoService.addTodo(new Todo(newTodo))
  }

  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    //TODO build the todo object from the data that comes into this method
    var todo = {};
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}