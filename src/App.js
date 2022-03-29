import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from './Context/Provider';
import Profile from './Pages/Profile';
import Contact from './Pages/Contatc';
import Knowledge from './Pages/Knowledge';
import Projects from './Pages/Projects';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path='/' component={ Profile } />
        <Route exact path='/contact' component={ Contact } />
        <Route exact path='/knowledge' component={ Knowledge } />
        <Route exact path='/projects' component={ Projects } />
      </Switch>
    </Provider>
  );
}

export default App;
