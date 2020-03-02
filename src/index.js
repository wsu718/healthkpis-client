import React from 'react';
import ReactDOM from 'react-dom';


// import { BrowserRouter as Router } from 'react-router-dom';

import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';

import { Provider } from 'react-redux';
import { sleepReducer } from './reducers/reducer';

import thunk from 'redux-thunk';

import './index.css';
import 'normalize.css'

import App from './App';
import * as serviceWorker from './serviceWorker';

import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(sleepReducer, composeEnhancers(applyMiddleware(thunk, logger)));

//Auth0 code
const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

ReactDOM.render(
    <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
        audience={config.audience}
    >
        {/* <Router> */}
        <Provider store={store}>
            <App />
        </Provider>

        {/* </Router> */}
    </Auth0Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
