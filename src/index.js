import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import history from './utils/history';

// import auth0
import { Auth0Provider } from './react-auth0-spa';
import config from './auth_config.json';

// import redux / tools
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';
import { Provider } from 'react-redux';
// import logger from 'redux-logger';

// auth0 code

const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

let middlewares = [thunk];

if (process.env.REACT_APP_NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`)
    middlewares.push(logger)
    console.log('dev')
}

console.log(`${process.env.REACT_APP_NODE_ENV}`)

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Auth0Provider
            domain={config.domain}
            client_id={config.clientId}
            redirect_uri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            audience={config.audience}
        >
            <App />
        </Auth0Provider>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
