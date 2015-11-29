import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import Reducers from './reducers/reducers'
import {chessClick} from './action.js'

// Action -> Dispatcher -> Store -> View
let store = createStore(Reducers);

store.dispatch(chessClick('hi', 1));
store.dispatch(chessClick('hidd', 1));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("form-container")
);

