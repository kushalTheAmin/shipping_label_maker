import React, {useState} from 'react';
import './App.css';
import Login from './core/components/login'
import Wizard from './core/components/wizard'
import ShippingLabel from './core/app/features/shipping-label-maker/ShippingLabel';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import withAuthenticaion from '../src/core/app/Auth/withAuthentication';

function App(props) {

  const [flags, toggleFlags] = useState({
    isLabelReady: false
  })

  const createLabel = () => { 
    toggleFlags({
      isLabelReady: true
    })
  }

  const { isLabelReady } = flags;

  return (
    <div className="App">
      <Router history>
        <Route path='/login' component={Login} />
        <Route path='/shipping' component={withAuthenticaion(Wizard, 'shipping', createLabel, )} />
        <Route path='/label' component={withAuthenticaion(ShippingLabel, 'label', isLabelReady)} />
      </Router>
    </div>
  );
}

export default App;
