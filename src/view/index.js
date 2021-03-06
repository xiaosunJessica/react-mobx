import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { action, observable } from 'mobx';

import Todo from './todo';

@inject(allStore => ({
  todoStore: allStore.todoStore,
  otherStore: allStore.otherStore,
}))
@observer
export default class TodoList extends React.Component {
  @observable newTodoTitle = ''

  // componentDidMount() {
  //   this.search.addEventListener('keypress', e => {
  //     if (e.keyCode === 13 && e.target.tagName === 'INPUT') {
  //       this.props.todoStore.searchTodo(e.target.value)
  //     }
  //   })
  // }

  render() {
    return (
      <div>
        <input type="search" onKeyPress={this.search} />
        <form onSubmit={this.handleFormSubmit}>
          New Todo:
          <input
            type="text"
            value={this.newTodoTitle}
            onChange={this.handleInputChange} />
          <button type="submit">Add</button>
        </form>

        <ul>
          {this.props.todoStore.todos.map(todo => {
            return <Todo todo={todo} key={todo.id} />
          })}
        </ul>
        Tasks left: {this.props.todoStore.unfinishedTodoCount}
      </div>
    )
  }

 @action 
 handleFormSubmit = e => {
   this.props.todoStore.addTodo(this.newTodoTitle);
   this.newTodoTitle = '';
   e.preventDefault();
 }

 @action
 handleInputChange = e => {
   this.newTodoTitle = e.target.value;
 }

  @action
  search = e => {
    if (e.key === 'Enter') {
      console.info(e.target.value)
      this.props.todoStore.searchTodo(e.target.value)
    }
  }
}

TodoList.wrappedComponent.propsTypes = {
  allStore: PropTypes.object.isRequired
}