import React from 'react';
import ReactDOM from 'react-dom';
import TimerView from './view';

import * as stateObj from './state'

ReactDOM.render(
  <TimerView appState={stateObj.appState}/>,
  document.getElementById('root')
)