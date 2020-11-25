import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import 'antd/dist/antd.css';
import './partials/_fonts.scss'
import './partials/_base.scss'
import './partials/_common.scss'
import './partials/_vars.scss'
import './index.css';

import App from './App';
import store from './redux/store';

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
