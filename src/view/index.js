import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class TimerView extends React.Component {
  render() {
    return (
      <button onClick={this.onReset.bind(this)}>
        Seconds passed: {this.props.appState.timer}
      </button>
    )
  }

  onReset() {
    this.props.appState.resetTimer();
  }
}