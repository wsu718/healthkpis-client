import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { useAuth0 } from './react-auth0-spa';

import { CSSReset, ThemeProvider, Box } from '@chakra-ui/core';
import customTheme from './theme/customTheme';

import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import AddDay from './components/AddDay';
import HealthData from './components/HealthData';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import ViewDay from './components/ViewDay';
import EditDay from './components/EditDay';
import Weeks from './components/Weeks';

import history from "./utils/history";

import './App.css';

function App() {

  const { isAuthenticated, loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {/* <div className='App'> */}
      <Router history={history}>

        <NavBar />

        <Box maxW='3xl' mx='auto'>

          <Switch>
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

            <PrivateRoute path='/weeks'>
              <Weeks />
            </PrivateRoute>

            <PrivateRoute path='/day/:date/edit'>
              <EditDay />
            </PrivateRoute>

            <PrivateRoute path='/day/:date'>
              <ViewDay />
            </PrivateRoute>
          </Switch>

        </Box>
      </Router>
      {/* </div> */}
    </ThemeProvider>

  );
}

export default App;
