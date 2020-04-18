import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import AddDay from './components/AddDay';
import HealthData from './components/HealthData';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import ViewDay from './components/ViewDay';

import history from "./utils/history";

import './App.css';

function App(props) {

  console.log(props)
  // console.log(params)
  // console.log(match.params)
  const { isAuthenticated, loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  // console.log(process.env.REACT_APP_API_URL)

  return (

    <div className='App'>


      <Router history={history}>
        <NavBar />

        <Route exact path='/'>
          {isAuthenticated ? <Redirect to='/dashboard' /> : <LandingPage />}
        </Route>

        <PrivateRoute path='/dashboard'>
          <AddDay />
        </PrivateRoute>

        <PrivateRoute path='/profile'>
          <Profile />
        </PrivateRoute>

        <PrivateRoute path='/addday'>
          <AddDay />
        </PrivateRoute>

        <PrivateRoute path='/data'>
          <HealthData />
        </PrivateRoute>

        <PrivateRoute path='/day/:date'>
          <ViewDay />
        </PrivateRoute>

      </Router>
    </div >

  );
}

export default App;
