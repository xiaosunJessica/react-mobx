import { observable, autorun, reaction, computed } from 'mobx'

export class TodoStore {
  authorStore;
  transportLayer;
  @observable todos = [];
  @observable isLoading = true;

  constructor(transportLayer, authorStore) {
    this.authorStore = authorStore;
    this.transportLayer = transportLayer;
  }
/**
 * 从服务段拉取所有的todo
 * 
 * @memberof TodoStore
 */
  loadTodos() {
    this.isLoading = true;
    this.transportLayer.fetchTodos().then(fetchedTodos => {
      fetchedTodos.forEach(json => this.updateTodoFromServer(json));
      this.isLoading = false;
    })
  }
/**
 * 使用服务器中的信息更新todo.保证一个todo只存一次。
 * 可能构造一个新的todo,更新现有的todo
 * 或删除todo,如果它已经在服务器上被删除的话
 * @param {any} json 
 * @memberof TodoStore
 */
  updateTodoFromServer(json) {
    var todo = this.todos.find(todo => todo.id === json.id);
    if (!todo) {
      todo = new Todo(this, json.id);
      this.todos.push(todo);
    }

    if (json.isDeleted) {
      this.removeTodo(todo);
    } else {
      todo.updateTodoFromServer(json);
    }
  }
/**
 * 
 * 在客户端和服务端都创建一个新的todo
 * @memberof TodoStore
 */
  createTodo() {
    var todo = new Todo(this);
    this.todos.push(todo);
    return todo;
  }
/**
 * 
 * 如果一个todo被删除了，将其从客户端内存中清理掉
 * @param {any} todo 
 * @memberof TodoStore
 */
  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    todo.dispose()
  }
}

export class todo {
/**
 * 
 * todo的唯一 id, 不可改变
 * @memberof todo
 */
  id = null;

  @observable completed = false;
  @observable task = '';

  @observable author = null;

  store = null;

  autoSave = true;

  saveHandler = null;

  constructor(store, id='') {
    this.store = store;
    this.id = id;
    thi.saveHandler = reaction(
      () => this.asJson,
      (json) => {
        if ( this.autoSave) {
          this.store.transportLayer.saveTodo(json);
        }
      }
    )
  }

  delete() {
    this.store.transportLayer.deleteTodo(this.id);
    this.store.removeTodo(this);
  }

  @computed get asJson() {
    return {
      id: this.id,
      completed: this.completed,
      task: this.task,
      authorId: this.author ? this.author.id : null
    }
  }
/**
 * 
 * 
 * @param {any} json 
 * @memberof todo
 */
  updateFromJson(json) {
    this.autoSave = false;
    this.completed = json.completed;
    this.task = json.task;
    this.author = this.store.authorStore.resolveAuthor(json.authorId);
    this.autoSave = true;
  }



  dispose(){
    // 清理观察者
    this.saveHandler();
  }
}