import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth0 } from "../react-auth0-spa";


import './NavBar.css';

const NavBar = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();


    return (
        <header>
            <nav>
                {/* <div className="logo">
                    <Link to="/">HealthKPIs</Link>
                </div> */}
                <div>
                    {!isAuthenticated && (
                        <button onClick={() => loginWithRedirect({})}>Log in</button>
                    )}

                    {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

                    {isAuthenticated && (
                        <span>
                            <Link to="/">Home</Link>&nbsp;
                            <Link to="/profile">Profile</Link>
                            <Link to="/external-api">External API</Link>
                        </span>
                    )}
                </div>
                {/* <ul>

                    <li><NavLink to="/data">Sleep Data</NavLink></li>
                    <li><NavLink to="/"><button>Log Sleep</button></NavLink></li>
                </ul> */}
            </nav>
        </header >
    )
}

export default NavBar;


