import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import store from './redux/store/store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
)
