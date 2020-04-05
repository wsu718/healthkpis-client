import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "../react-auth0-spa";
import moment from 'moment';

import './HealthData.css'

const HealthData = props => {
    const { getTokenSilently } = useAuth0();
    const [healthEntries, setHealthEntries] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getTokenSilently();

                const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const responseData = await response.json();
                setHealthEntries(responseData)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [getTokenSilently])

    return (


        <div>
            <h2>Your health data</h2>
            <table className="datatable">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Sleep score</th>
                        <th>Duration</th>
                        <th>Bedtime</th>
                        <th>Readiness</th>
                        <th>HRV</th>
                        <th>RHR</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {healthEntries.map((day, index) => (
                        <tr key={index}>
                            <td><Link to={`/day/${day.summary_date}`}>{day.summary_date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")}</Link></td>
                            <td>{day.score_total}</td>
                            {/* <td>{sleep.duration}</td> */}
                            {/* Moment works with milliseconds by default, so multiply what we store as seconds by 1000 */}
                            <td>{moment.duration(day.duration * 1000).hours()}h {moment.duration(day.duration * 1000).minutes()}m</td>

                            <td>{moment(day.bedtime_start, ["HH:mm"]).format('hh[:]mm A')}</td>
                            <td>{day.readiness}</td>
                            <td>{day.hrv}</td>
                            <td>{day.rhr}</td>
                            <td>{day.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div >
    )
}

export default HealthData;