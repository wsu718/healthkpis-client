import React from 'react';
import { connect } from 'react-redux';

const SleepReview = props => {

    const dayReviewing = props.match.params.sleepDate;

    console.log(dayReviewing)

    // Average Sleep Duration
    const totalDurationHours = props.sleepEntries.reduce((acc, val) => acc + val.durationHours, 0)
    const totalDurationMinutes = (props.sleepEntries.reduce((acc, val) => acc + val.durationMinutes, 0)) / 60
    const totalSleep = totalDurationHours + (totalDurationMinutes / 60)
    const averageSleep = Math.round(totalSleep / props.sleepEntriesLength);
    const averageSleepMinRemain = Math.round(totalSleep % props.sleepEntriesLength)

    // Average Sleep Score
    const averageSleepScore = Math.round(props.sleepEntries.reduce((acc, val) => acc + val.score, 0) / props.sleepEntriesLength)

    // This Day's Sleep
    const thisDaySleepDurationHours = props.sleepEntries.find(today => today.date === dayReviewing).durationHours
    const thisDaySleepDurationMinutes = props.sleepEntries.find(today => today.date === dayReviewing).durationMinutes
    const thisDaySleepDurationTotal = thisDaySleepDurationHours + (thisDaySleepDurationMinutes / 60)
    const thisDaySleepScore = props.sleepEntries.find(today => today.date === dayReviewing).score

    // Change in sleep
    const changeDuration = Math.round((thisDaySleepDurationTotal - averageSleep) / thisDaySleepDurationTotal * 100)
    const changeScore = Math.round((thisDaySleepScore - averageSleepScore) / thisDaySleepScore * 100)

    return (
        <div>
            <h2>Woohoo!</h2>

            <p>Data on your sleep for {dayReviewing}</p>

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
                        <td>{thisDaySleepDurationHours}hrs, {thisDaySleepDurationMinutes}min </td>
                        <td>{averageSleep}hrs, {averageSleepMinRemain}mins</td>
                        <td>
                            {changeDuration}%
                        </td>


                    </tr>
                    <tr>
                        <th>Sleep score</th>
                        <td>{thisDaySleepScore}</td>
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