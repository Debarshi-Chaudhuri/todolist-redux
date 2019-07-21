import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import create_redux_store from './store'
import {Provider} from 'react-redux'
export const store=create_redux_store()
ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);
