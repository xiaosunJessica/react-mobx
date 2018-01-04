import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class TimerView extends React.Component {
  render() {
    console.info(this.props.rootStore, 'root-sotre=======', this.props.rootStore.todoStore.isLoading)
    return (
      <button onClick={this.onReset.bind(this)}>
        Seconds passed: {this.props.rootStore.todoStore.isLoading ? 'true' : 'false'}
      </button>
    )
  }

  onReset() {
    this.props.appState.resetTimer();
  }
}