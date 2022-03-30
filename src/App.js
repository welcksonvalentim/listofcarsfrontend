import React from 'react';
import Switch from 'react-dom';
import { Route } from 'react-router-dom';
import Provider from './Context/Provider';
import Home from './Pages/Home';
import Cars from './Pages/Cars';

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
