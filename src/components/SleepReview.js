import React from 'react';
import { connect } from 'react-redux';

const SleepReview = props => {

    const dayReviewing = props.match.params.sleepDate;

    // console.log(dayReviewing)

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
            <h2>Data on your sleep</h2>

            <p>{dayReviewing.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")}</p>

            <h3>{/* Add awards */}</h3>

            <table className="datatable">
                <thead>
                    <tr>
                        <th></th>
                        <th>Change</th>
                        <th>Last night</th>
                        <th>Average</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Sleep duration</th>
                        <td>{changeDuration}%</td>
                        <td>{thisDaySleepDurationHours} hrs, {thisDaySleepDurationMinutes} min </td>
                        <td>{averageSleep} hrs, {averageSleepMinRemain} mins</td>
                    </tr>
                    <tr>
                        <th>Sleep score</th>
                        <td>{changeScore}%</td>
                        <td>{thisDaySleepScore}</td>
                        <td>{averageSleepScore}</td>
                    </tr>
                    <tr>
                        <th>Bedtime</th>
                        <td>-20%</td>
                        <td>22:59</td>
                        <td>21:00</td>
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