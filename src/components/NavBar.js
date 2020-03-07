import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "../react-auth0-spa";
import Logo from '../assets/shapes-100.png';

import './NavBar.css';

const NavBar = () => {

    const { logout } = useAuth0();


    return (
        <header className="mt-4">
            <nav className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <NavLink to='/data'>
                            <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
                        </NavLink>
                    </div>
                </div>

                <div className="links">
                    <ul>

                        <li><NavLink to="/data">Data</NavLink></li>
                        <li><NavLink to="/addday">Add Day</NavLink></li>
                        {/* <li><Link to="/profile">Profile</Link></li> */}
                    </ul>

                    <button className='primary-button' onClick={() => logout()}>Log out</button>

                </div>

            </nav>
        </header >
    )
}

export default NavBar;


