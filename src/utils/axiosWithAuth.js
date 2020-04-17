import axios from 'axios';
import createAuth0Client from '@auth0/auth0-spa-js';

export const axiosWithAuth = async () => {

    const auth0 = await createAuth0Client({
        domain: 'healthkpis.auth0.com',
        client_id: 'ORlXD6PIO4b4RNInzoCZJQoJMpS2JIAY',
        audience: "https://api.healthkpis.com"
    });

    const token = await auth0.getTokenSilently();

    // this returns axios object 
    return axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export default axiosWithAuth;