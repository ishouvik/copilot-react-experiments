import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AuthenticatedPage from './components/AuthenticatedPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/authenticated" component={AuthenticatedPage} />
      </Switch>
    </Router>
  );
}

export default App;