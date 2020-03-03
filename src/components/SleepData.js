import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSleep } from '../actions/actions';
import { useAuth0 } from "../react-auth0-spa";
import moment from 'moment';

const SleepData = props => {
    const [showResult, setShowResult] = useState(false);
    const { getTokenSilently } = useAuth0();
    const [sleepEntries, setSleepEntries] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getTokenSilently();

                const response = await fetch(process.env.REACT_APP_API_URL, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const responseData = await response.json();
                // const responseData = await response;

                setShowResult(true);
                // setApiMessage(responseData);
                setSleepEntries(responseData)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [])

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
                    {sleepEntries.map((sleep, index) => (
                        <tr key={index}>
                            <td><Link to={`/sleep/${sleep.summary_date}`}>{sleep.summary_date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")}</Link></td>
                            <td>{sleep.score_total}</td>
                            {/* <td>{sleep.duration}</td> */}
                            {/* Moment works with milliseconds by default, so multiply what we store as seconds by 1000 */}
                            <td>{moment.duration(sleep.duration * 1000).hours()}h {moment.duration(sleep.duration * 1000).minutes()}m</td>
                            <td>{moment(sleep.bedtime_start).format('hh[:]mm A')}</td>
                            <td>{sleep.readiness}</td>
                            <td>{sleep.hrv}</td>
                            <td>{sleep.rhr}</td>
                            <td>{sleep.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div >
    )
}

const mapStateToProps = state => {
    return {
        // sleepEntries: state.sleepEntries
    }
}

export default connect(mapStateToProps, { getSleep })(SleepData);