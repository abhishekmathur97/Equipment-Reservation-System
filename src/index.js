import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { store } from './store/store';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
