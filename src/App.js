import React, {useState} from 'react';
import './App.css';
import Login from './core/components/login'
import Wizard from './core/components/wizard'
import ShippingLabel from './core/app/features/shipping-label-maker/ShippingLabel';
import Header from './core/components/header';
import steps from './core/app/features/shipping-label-maker/Steps';
import { shippingObj } from './core/constants/comman';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import withAuthenticaion from '../src/core/app/Auth/withAuthentication';

const App = (props) => {

  const [labelData, createLabelData] = useState({
    isLabelReady: false,
    wizardContext: shippingObj 
  })

  const createLabel = (data) => { 
    createLabelData({
      isLabelReady: true
    })
  }

  const { isLabelReady, wizardContext = {} } = labelData;

  return (
    <div className="App">
      <Router history>
        <Route path='/login' component={Login} />
        <Route path='/shipping' component={withAuthenticaion(Wizard, 'shipping', createLabel, Header, wizardContext, steps)} />
        <Route path='/label' component={withAuthenticaion(ShippingLabel, 'label', isLabelReady, wizardContext)} />
      </Router>
    </div>
  );
}

export default App;
