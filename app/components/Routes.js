import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MarketMap } from './MarketMap';

const Routes = () => {
  return (
    <Router>
      <div>
        <main>
          <h1>Welcome to my Sandbox!</h1>
          <p>check out this cool map</p>
        </main>
        <Route path="/list" component={MarketMap} />
      </div>
    </Router>
  );
};

export default Routes;
