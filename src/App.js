import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from './Context/Provider';
import Home from './Pages/Home';
import Cars from './Pages/Cars';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/Cars' component={ Cars } />
      </Switch>
    </Provider>
  );
}

export default App;
