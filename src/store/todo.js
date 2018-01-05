import { observable, action, computed } from 'mobx'
import todoModel from './todoModel'

export class TodoStore {
  @observable todos = []
  @observable title;
  constructor(title) {
    this.title = title
  }

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.checked).length
  }

  @action
  addTodo (title) {
    this.todos.push(new todoModel(title))
  }

  @action
  deleteTodo (id) {
    this.todos.map(todo => {
      if (todo.id === id) {
        this.todos.remove(todo)
      }
    })
  }

  @action
  updateTodo (obj) {
    this.todos.map(todo => {
      if (todo.id = obj.id) {
        this.todos.title = obj.title
      }
    })
  }

  @action
  searchTodo (title) {
    this.todos.map(todo => {
      if (todo.title.indexOf(title)< 0) {
        this.todos.remove(todo);
      }
    })
  }
}