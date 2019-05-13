import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import JsonService from './services';
import { JsonServiceProvider } from './services';
import store from './store/store';

const jsonService = new JsonService();

ReactDOM.render(
  <Provider store={store}>
    <JsonServiceProvider value={jsonService}>
      <Router>
        <App />
      </Router>
    </JsonServiceProvider>
  </Provider>,
  document.getElementById('root')
);
