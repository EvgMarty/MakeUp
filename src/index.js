import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/Store';
import App from './App/App';
import './styles/index.scss';
import './styles/reset.scss';
import './styles/scrollBar.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
