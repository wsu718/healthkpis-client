import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSleep } from '../actions/actions';
import moment from 'moment';

const LogSleep = props => {

    // const today = new Date().toISOString().substr(0, 10);
    // ? Is it better to create a new variable here, or do it in initial state of sleepText? This date is used to default the input element below. 

    const [sleepText, setSleepText] = useState({
        summary_date: new Date().toISOString().substr(0, 10),
        score_total: undefined,
        bedtime_start: undefined,
        duration: 0,
    });

    console.log(sleepText)

    // Convert duration to seconds instead of hours and minutes

    const handleDateChanges = e => {
        setSleepText({
            ...sleepText,
            summary_date: e.target.value,
            bedtime_start: undefined
        });
    };

    const handleScoreChanges = e => {
        setSleepText({
            ...sleepText,
            score_total: +e.target.value
        });
    };


    const handleDurationChanges = e => {
        if (e.target.name === 'durationHours') {
            setSleepText({
                ...sleepText,
                duration: sleepText.duration + (+e.target.value * 3600)
            })
        } else if (e.target.name === 'durationMinutes') {
            setSleepText({
                ...sleepText,
                duration: sleepText.duration + (+e.target.value * 60)
            })
        }
    }

    const handleBedtimeChanges = e => {
        setSleepText({
            ...sleepText,
            bedtime_start: moment(`${sleepText.summary_date} ${e.target.value}`).format(),
        })
    }

    console.log(sleepText);

    const handleSubmit = e => {
        e.preventDefault();
        props.addSleep(sleepText);
        props.history.push(`/ sleep / ${sleepText.date}`)
    };

    return (

        <main>
            <h2>
                Log sleep
            </h2>

            <form className="logsleepform">

                <input
                    type="date"
                    name="summary_date"
                    value={sleepText.summary_date}
                    onChange={handleDateChanges}
                    aria-label="Date"
                    className="logsleepdate"

                />

                <label htmlFor="score"><h3>Sleep score</h3></label>

                <input
                    type="number"
                    name="score_total"
                    min="0"
                    max="100"
                    onChange={handleScoreChanges}
                />

                <label htmlFor="bedtime"><h3>Bedtime</h3></label>

                <input
                    type="time"
                    name="bedtime_start"
                    id="bedtime"
                    onChange={handleBedtimeChanges}
                    required

                />

                <fieldset>
                    <legend>
                        Sleep duration
                    </legend>
                    <h3>Sleep duration</h3>
                    <input
                        type="number"
                        name="durationHours"
                        id="durationHours"
                        min="0"
                        max="24"
                        onChange={handleDurationChanges}
                    />
                    <label htmlFor="durationHours">
                        hours
                    </label>
                    <input
                        id="durationMinutes"
                        type="number"
                        name="durationMinutes"
                        min="0"
                        max="59"
                        onChange={handleDurationChanges}
                    />
                    <label htmlFor="durationMinutes">
                        minutes
                    </label>
                </fieldset>




                <p>
                    <button onClick={handleSubmit}>
                        Log sleep
                </button>

                </p>
            </form>


        </main >
    )
}

const mapStateToProps = state => {
    return {
        addSleep: addSleep,
        sleepEntries: state.sleepEntries
    }
}

export default connect(mapStateToProps, { addSleep })(LogSleep);