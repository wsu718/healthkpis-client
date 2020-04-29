import React from 'react';
import { useAuth0 } from "../react-auth0-spa";
import './LandingPage.css'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/shapes-100.png';
import './NavBar.css';
import { Button } from '@chakra-ui/core';

const LandingPage = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <header>
                <nav className='top-nav'>
                    <div className='top-nav__primary-nav' >
                        <NavLink to="/data">
                            <img src={Logo} className='top-nav__logo' alt='HeathKPIs' />
                        </NavLink>
                    </div>

                    <div className='top-nav__account'>
                        <Button onClick={() => loginWithRedirect({})}>Log in</Button>
                    </div>
                </nav>
            </header>

            <main className='land'>
                <h2 className='land__tagline'>
                    Improve your health
                  <br />
                    <span className='land__tagline--black'>through data</span>
                </h2>

                <p className='land__copy'>
                    Track your most important health data every day. Create weekly experiments and compare the results.
                </p>

                <Button mt={6} onClick={() => loginWithRedirect({})} className="primary-button">Get started</Button>
            </main>
        </div>
    )
}

export default LandingPage;