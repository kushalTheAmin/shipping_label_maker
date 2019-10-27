import React from 'react';
import './App.css';
import Login from './core/components/login'
import Wizard from './core/components/wizard'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import withAuthenticaion from '../src/core/app/Auth/withAuthentication';

window.fakeAuth = {
  isAuthenticated: false,
}

function App() {
  return (
    <div className="App">
      <Router history>
        <Route path='/login' component={Login} />
        <Route path='/shipping' component={ withAuthenticaion(Wizard)} />
      </Router>
    </div>
  );
}

export default App;
