import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getHealth } from '../actions';
import { connect } from 'react-redux';
import './HealthData.css'

const HealthData = ({ health, getHealth }) => {

    useEffect(() => {
        getHealth()
    }, [getHealth]
    )

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

                    {health.map((day, index) => (
                        <tr key={index}>
                            <td><Link to={`/day/${day.summary_date}`}>{day.summary_date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")}</Link></td>
                            <td>{day.score_total}</td>

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
        </div>
    )
}

const mapStateToProps = state => {
    return {
        health: state.health.data
    };
};

export default connect(mapStateToProps, { getHealth })(HealthData);