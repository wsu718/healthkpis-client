import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
    const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

    useEffect(() => {
        if (loading || isAuthenticated) {
            return;
        }
        const fn = async () => {
            await loginWithRedirect({
                appState: { targetUrl: path }
            });
        };
        fn();
    }, [loading, isAuthenticated, loginWithRedirect, path]);

    // This is Auth0 starter code. Removed because it is breaking the React Router update. 

    // const render = props =>
    //     isAuthenticated === true ? <Component {...props} /> : null;

    // return <Route path={path} render={render} {...rest} />;
    return <Route path={path} {...rest} />;
};

export default PrivateRoute;