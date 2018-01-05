import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools'

import TodoList from 'view';
import { TodoStore } from 'store/todo';
import { OtherStore } from 'store/other-store';

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

todoStore.addTodo('add first')
todoStore.addTodo('add second')
todoStore.todos[0].checked = true

setTimeout(() => {
  todoStore.addTodo("add third");
}, 2000);

window.todoStore = todoStore