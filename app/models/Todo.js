export default class Todo {
  constructor(data) {
    this._id = data._id;
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get Template() {
    return /*html*/`
    <div class="col-auto text-center todoBackground rounded shadow-lg ml-2 mb-2">
    <h4 class="todoTitle">Item:</h4>
    <h2 class="todoItem">${this.description}</h2>
    <h6 class="text-warning">User: ${this.user}</h6>
    <input ${this.completed ? 'checked' : ''} value="${this.completed}" onclick="app.todoController.toggleTodoStatus('${this._id}')" type="checkbox"/>
    <button onclick="app.todoController.removeTodo('${this._id}')"><i class="fas fa-trash text-danger"></i></button>
    </div>
      `;
  }
  
  
  
    
  }



  
