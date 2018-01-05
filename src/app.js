import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './view';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools'

import { TodoStore } from './store/todo';
import { OtherStore } from './store/other-store';

const todoStore = new TodoStore();
const otherStore = new OtherStore();

ReactDOM.render(
  <Provider todoStore={todoStore} otherStore={otherStore}>
    <TodoList>
      <DevTools />
    </TodoList>
  </Provider>,
  document.getElementById('root')
)

todoStore.addTodo('Get Coffee')
todoStore.addTodo('Write simpler code')
todoStore.todos[0].finished = true

setTimeout(() => {
  todoStore.addTodo("Get a cookie as well");
}, 2000);

window.todoStore = todoStore