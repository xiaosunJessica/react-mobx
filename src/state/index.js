import { observable } from 'mobx';

var appState = observable({
  timer: 0
});

export {
  appState,
}