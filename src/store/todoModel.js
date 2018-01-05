import { observable } from 'mobx'

export default class TodoModel {
  id = Math.random();
  @observable title;
  @observable checked = false;

  constructor(title) {
    this.title = title
  }
}