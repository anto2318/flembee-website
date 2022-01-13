import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'react-redux';

import { store } from './redux';

import App from './App';
import * as serviceWorker from './registerServiceWorker';

import './index.css';
import './assets/scss/lazy.scss';
import './assets/scss/demo.scss';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <Redux.Provider store={store}>
    <App />
  </Redux.Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
