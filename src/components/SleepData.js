import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SleepData = props => {
    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Sleep score</th>
                        <th>Bedtime</th>
                    </tr>
                </thead>
                <tbody>
                    {props.sleepEntries.map((sleep, index) => (
                        <tr key={index}>
                            <td><Link to={`/sleep/${sleep.date}`}>{sleep.date}</Link></td>
                            <td>{sleep.durationHours}hrs, {sleep.durationMinutes} min</td>
                            <td>{sleep.score}</td>
                            <td>{sleep.bedtimeHour}:{sleep.bedtimeMinutes} {sleep.bedtimeAMPM}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div >
    )
}

const mapStateToProps = state => {
    return {
        sleepEntries: state.sleepEntries
    }
}
export default connect(mapStateToProps, {})(SleepData);