import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import counterStore from './counterStore.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={counterStore}><App/></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
