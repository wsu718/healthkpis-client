// src/utils/history.js

// this is necessary because Auth0 needs to access history in index.js -- outside a component
// more information here: 
// https://auth0.com/docs/quickstart/spa/react#create-react-router-s-history-instance
// https://github.com/ReactTraining/react-router/blob/master/FAQ.md#how-do-i-access-the-history-object-outside-of-components

import { createBrowserHistory } from "history";
export default createBrowserHistory();