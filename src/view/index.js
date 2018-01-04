import React from 'react';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';

import Todo from './todo';

@observer
export default class TodoList extends React.Component {
  @observable newTodoTitle = ''

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          New Todo:
          <input
            type="text"
            value={this.newTodoTitle}
            onChange={this.handleInputChange} />
          <button type="submit">Add</button>
        </form>

        <ul>
          {this.props.rootStore.todoStore.todos.map(todo => {
            return <Todo todo={todo} key={todo.id} />
          })}
        </ul>
        Tasks left: {this.props.rootStore.todoStore.unfinishedTodoCount}
      </div>
    )
  }

 @action 
 handleFormSubmit = e => {
   this.props.rootStore.todoStore.addTodo(this.newTodoTitle);
   this.newTodoTitle = '';
   e.preventDefault();
 }

 @action
 handleInputChange = e => {
   this.newTodoTitle = e.target.value;
 }
}