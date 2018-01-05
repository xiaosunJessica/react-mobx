import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';

// const Todo = observer(({ todo }) => (
//   <li>
//     <input 
//       type="checkbox" 
//       checked={todo.finished} 
//       onClick={() => (todo.finished = !todo.finished)} />
//       {todo.title}
//       <button>delete</button>
//   </li>
// ))

@inject('todoStore')@observer
class Todo extends React.Component {
  render() {
    const { todo } = this.props
    return (
      <li>
        <input 
          type="checkbox" 
          checked={todo.finished} 
          onClick={() => (todo.finished = !todo.finished)} />
          {todo.title}
          <button onClick={this.handleDelete}>delete</button>
      </li>
    )
  }

  @action 
  handleDelete = e => {
    this.props.rootStore.todoStore.deleteTodo(this.props.todo.id)
  }
}

export default Todo
