import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "../Services/AxiosService.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
const url = 'tyson/todos/'


class TodoService {
  async getTodos() {

    let res = await api.get(url);
    let results = res.data.data.map(rawData => new Todo(rawData));
    ProxyState.todos = results;
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    this.getTodos()
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo._id == todoId);
    if (todo.completed == false) {
      todo.completed = true
    } else {
      todo.completed = false
    }
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await api.put(url + todoId, todo);
    console.log(res)
    this.getTodos()
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    let res = await api.delete(url + todoId);
    console.log(res)
    this.getTodos()
    //		what is the request type
    //		once the response comes back, how do you update the state
  }
}

const todoService = new TodoService();
export default todoService;