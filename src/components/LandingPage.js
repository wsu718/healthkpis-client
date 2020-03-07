import React from 'react';
import { useAuth0 } from "../react-auth0-spa";

import Logo from '../assets/shapes-100.png';

const LandingPage = () => {

    const { loginWithRedirect } = useAuth0();

    return (

        <div>
            <nav>
                <img src={Logo} alt="HealthKPIs" />
                <button className="primary-button" onClick={() => loginWithRedirect({})}>Log in</button>
            </nav>
            <main>
                <h2>
                    Improve your health
                  <br />
                    <span>through data</span>
                </h2>
                <p>
                    Track your most important health data every day. Create weekly experiments and compare the results.
                </p>
                <button onClick={() => loginWithRedirect({})} className="primary-button">Get started</button>

            </main>
        </div >
    )
}

export default LandingPage;