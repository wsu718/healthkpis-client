import React from 'react';
import { useAuth0 } from "../react-auth0-spa";
import './LandingPage.css'

const LandingPage = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <main className='land'>
            <h2 className='land__tagline'>
                Improve your health
                  <br />
                <span className='land__tagline--black'>through data</span>
            </h2>

            <p className='land__copy'>
                Track your most important health data every day. Create weekly experiments and compare the results.
            </p>

            <button onClick={() => loginWithRedirect({})} className="primary-button">Get started</button>

        </main>
    )
}

export default LandingPage;