import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <a href="#">HealthKPIs</a>
                </div>
                <ul>
                    <li><a href="#">Data</a></li>
                    <li><a href="#">Experiments</a></li>
                    <li><a href="#">Today</a></li>
                </ul>
            </nav>
        </header >
    )
}

export default Header;
