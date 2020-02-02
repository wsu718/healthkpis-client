import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SleepData = props => {



    return (
        <div>
            <h2>Your sleep data</h2>

            <table className="datatable">
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
                            <td><Link to={`/sleep/${sleep.date}`}>{sleep.date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")}</Link></td>
                            <td>{sleep.seconds} seconds</td>
                            <td>{sleep.score}</td>
                            <td>{sleep.bedtime}</td>
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