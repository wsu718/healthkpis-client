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
                    <li><NavLink to="/data">SLEEP DATA</NavLink></li>
                    <li><NavLink to="/experiments">EXPERIMENTS</NavLink></li>
                    <li><NavLink to="/"><button>LOG SLEEP</button></NavLink></li>
                </ul>
            </nav>
        </header >
    )
}

export default Header;


