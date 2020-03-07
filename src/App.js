import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import AddDay from './components/AddDay';
import HealthData from './components/HealthData';
import LandingPage from './components/LandingPage';

import './App.css';

function App() {

  const { isAuthenticated, loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  // console.log(process.env.REACT_APP_API_URL)

  return (

    <div className='App'>
      <Switch>
        <Route exact path='/'>
          {isAuthenticated ? <Redirect to='/dashboard' /> : <LandingPage />}
        </Route>
        <PrivateRoute path='/dashboard' component={AddDay} />
        <PrivateRoute path='/profile' component={Profile} />
        <PrivateRoute path='/addday' component={AddDay} />
        <PrivateRoute path='/data' component={HealthData} />
      </Switch>
    </div >

  );
}

export default App;
