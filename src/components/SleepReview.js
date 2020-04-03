import React from 'react';

const SleepReview = props => {

    // get sleep data from props

    const dayReviewing = props.match.params.sleepDate;

    // console.log(dayReviewing)




    // // This Day's Sleep
    // const thisDaySleepDurationHours = props.sleepEntries.find(today => today.date === dayReviewing).durationHours
    // const thisDaySleepDurationMinutes = props.sleepEntries.find(today => today.date === dayReviewing).durationMinutes
    // const thisDaySleepDurationTotal = thisDaySleepDurationHours + (thisDaySleepDurationMinutes / 60)


    // const thisDaySleepScore = props.sleepEntries.find(today => today.date === dayReviewing).score


    // // Average Sleep Score
    // const averageSleepScore = Math.round(props.sleepEntries.reduce((acc, val) => acc + val.score, 0) / props.sleepEntriesLength)

    // // Average Sleep Duration: to calculate average sleep duration:

    // // 1. We need to sum the hours from all sleep entries 
    // const totalDurationHours = props.sleepEntries.reduce((acc, val) => acc + val.durationHours, 0)

    // // 2. Then we need to sum the minutes from all the sleep entries, and add them to the hours
    // const totalDurationMinutes = (props.sleepEntries.reduce((acc, val) => acc + val.durationMinutes, 0)) / 60
    // const totalDurationHoursAndMinutes = totalDurationHours + (totalDurationMinutes / 60)

    // // 3. Then we need to get an average 
    // const averageSleep = Math.round(totalDurationHoursAndMinutes / props.sleepEntriesLength);

    // // 3. But we also need to show the remaining minutes
    // const averageSleepMinRemain = Math.round(totalDurationHoursAndMinutes % props.sleepEntriesLength)



    // // Change in sleep
    // const changeDuration = Math.round((thisDaySleepDurationTotal - averageSleep) / thisDaySleepDurationTotal * 100)
    // const changeScore = Math.round((thisDaySleepScore - averageSleepScore) / thisDaySleepScore * 100)

    return (
        <div>
            <h2>Data on your sleep</h2>

            <p>{dayReviewing.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")}</p> */}

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

export default SleepReview;