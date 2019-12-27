import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>


    </div >

  );
}

export default App;
