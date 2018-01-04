import React from 'react';
import ReactDOM from 'react-dom';
import TimerView from './view';
import DevTools from 'mobx-react-devtools'

import {RootStore} from './store'

ReactDOM.render(
  <div>
    <TimerView rootStore={new RootStore()}/>
    <DevTools />
  </div>,
  document.getElementById('root')
)