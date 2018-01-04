import { observable } from 'mobx';
import {TodoStore} from './todo';

export class RootStore {
  constructor() {
    this.todoStore = new TodoStore(this)
  }
}

// var appState = observable({
//   timer: 0
// });

// export {
//   appState,
// }