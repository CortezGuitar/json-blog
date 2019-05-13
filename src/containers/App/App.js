import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../HomePage';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
