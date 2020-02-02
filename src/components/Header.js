import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <Link to="/">HealthKPIs</Link>
                </div>
                <ul>
                    <li><NavLink to="/data">Sleep Data</NavLink></li>
                    <li><NavLink to="/experiments">Experiments</NavLink></li>
                    <li><NavLink to="/"><button>Log Sleep</button></NavLink></li>
                </ul>
            </nav>
        </header >
    )
}

export default Header;


