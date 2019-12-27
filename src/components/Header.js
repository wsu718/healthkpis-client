import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <Link to="/">HealthKPIs</Link>
                </div>
                <ul>
                    <li><NavLink to="/">Data</NavLink></li>
                    <li><NavLink to="/">Experiments</NavLink></li>
                    <li><NavLink to="/">Today</NavLink></li>
                </ul>
            </nav>
        </header >
    )
}

export default Header;
