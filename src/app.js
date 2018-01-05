import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './view';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools'

import {RootStore} from './store';

const store = new RootStore();

ReactDOM.render(
  <Provider rootStore={store}>
    <TodoList>
      <DevTools />
    </TodoList>
  </Provider>,
  document.getElementById('root')
)

store.todoStore.addTodo('Get Coffee')
store.todoStore.addTodo('Write simpler code')
store.todoStore.todos[0].finished = true

setTimeout(() => {
  store.todoStore.addTodo("Get a cookie as well");
}, 2000);

window.store = store