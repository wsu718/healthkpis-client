import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "../react-auth0-spa";
import Logo from '../assets/shapes-100.png';

import './NavBar.css';

const NavBar = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();


    return (
        <header>
            <nav className='top-nav'>
                <div className='top-nav__primary-nav' >
                    <NavLink to="/data">
                        <img src={Logo} className='top-nav__logo' alt='HeathKPIs' />
                    </NavLink>

                    {isAuthenticated && (
                        <ul className="top-nav__ul">
                            <li className='top-nav__li'><NavLink to="/data" className='top-nav__a'>Data</NavLink></li>
                            <li className='top-nav__li'><NavLink to="/addday" className='top-nav__a'>Add Day</NavLink></li>
                        </ul>
                    )}

                </div>

                <div className='top-nav__account'>

                    {!isAuthenticated && (
                        <button className='primary-button' onClick={() => loginWithRedirect({})}>Log in</button>
                    )}

                    {isAuthenticated && <button className='primary-button' onClick={() => logout()}>Log out</button>}
                </div>
                {/*  */}
            </nav>
        </header >
    )
}

export default NavBar;


