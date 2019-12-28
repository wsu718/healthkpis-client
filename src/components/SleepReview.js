import React from 'react';
import { connect } from 'react-redux';

const SleepReview = props => {

    // Average Sleep Duration
    const totalDurationHours = props.sleepEntries.reduce((acc, val) => acc + val.durationHours, 0)
    const totalDurationMinutes = (props.sleepEntries.reduce((acc, val) => acc + val.durationMinutes, 0)) / 60
    const totalSleep = totalDurationHours + (totalDurationMinutes / 60)
    const averageSleep = Math.round(totalSleep / props.sleepEntriesLength);
    const averageSleepMinRemain = Math.round(totalSleep % props.sleepEntriesLength)

    // Average Sleep Score
    const averageSleepScore = Math.round(props.sleepEntries.reduce((acc, val) => acc + val.score, 0) / props.sleepEntriesLength)

    // Last Night's Sleep
    const lastNightSleepDurationHours = props.sleepEntries[props.sleepEntriesLength - 1].durationHours
    const lastNightSleepDurationMinutes = props.sleepEntries[props.sleepEntriesLength - 1].durationMinutes
    const lastNightSleepDurationTotal = lastNightSleepDurationHours + (lastNightSleepDurationMinutes / 60)
    const lastNightSleepScore = props.sleepEntries[props.sleepEntriesLength - 1].score

    // Change in sleep
    const changeDuration = Math.round((lastNightSleepDurationTotal - averageSleep) / lastNightSleepDurationTotal * 100)
    const changeScore = Math.round((lastNightSleepScore - averageSleepScore) / lastNightSleepScore * 100)

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
                        <td>{lastNightSleepDurationHours}hrs, {lastNightSleepDurationMinutes}min </td>
                        <td>{averageSleep}hrs, {averageSleepMinRemain}mins</td>
                        <td>
                            {changeDuration}%
                        </td>


                    </tr>
                    <tr>
                        <th>Sleep score</th>
                        <td>{lastNightSleepScore}</td>
                        <td>{averageSleepScore}</td>
                        <td>{changeScore}%</td>
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