import React from 'react'
import { createStore } from 'redux'
import { connect,Provider} from 'react-redux'
import ReactDom from 'react-dom'
import configureStore from './store/configureStore'
import reducer from './reducers/reducer'
import App from './container/App'

let store = configureStore()

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
