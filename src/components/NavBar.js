import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth0 } from "../react-auth0-spa";


import './NavBar.css';

const NavBar = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();


    return (
        <header>
            <nav>
                <div className="logo">
                    <NavLink to="/">HealthKPIs</NavLink>
                </div>
                <div className="links">


                    {isAuthenticated && (

                        <ul>

                            <li><NavLink to="/data">Data</NavLink></li>
                            <li><NavLink to="/logsleep">Add Day</NavLink></li>
                            {/* <li><Link to="/profile">Profile</Link></li> */}
                        </ul>
                    )}

                    {!isAuthenticated && (
                        <button onClick={() => loginWithRedirect({})}>Log in</button>
                    )}

                    {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
                </div>
                {/*  */}
            </nav>
        </header >
    )
}

export default NavBar;


