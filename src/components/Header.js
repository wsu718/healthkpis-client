import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <Link to="/">HealthKPIs</Link>
                </div>
                <ul>
                    <li><NavLink to="/data">Data</NavLink></li>
                    <li><NavLink to="/experiments">Experiments</NavLink></li>
                    <li><NavLink to="/">Log sleep</NavLink></li>
                </ul>
            </nav>
        </header >
    )
}

export default Header;


