import React from 'react';
import { connect } from 'react-redux';

const SleepReview = props => {
    return (
        <div>
            <h2>Woohoo!</h2>

            <h3>{/* Add awards */}</h3>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Last night</th>
                        <th>Average</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Sleep duration</th>
                        <td>{props.sleepEntries[props.sleepEntriesLength - 1].durationHours}hrs, {props.sleepEntries[props.sleepEntriesLength - 1].durationMinutes}min </td>
                        <td></td>
                        <td></td>


                    </tr>
                    <tr>
                        <th>Sleep score</th>
                        <td>{props.sleepEntries[props.sleepEntriesLength - 1].score}</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Bedtime</th>
                        <td>{props.sleepEntries[props.sleepEntriesLength - 1].bedtimeHour}:{props.sleepEntries[props.sleepEntriesLength - 1].bedtimeMinutes} {props.sleepEntries[props.sleepEntriesLength - 1].bedtimeAMPM}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}

const mapStateToProps = state => {
    return {
        sleepEntriesLength: state.sleepEntries.length,
        sleepEntries: state.sleepEntries
    }
}
export default connect(mapStateToProps, {})(SleepReview);