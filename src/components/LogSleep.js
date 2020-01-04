import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSleep } from '../actions/actions';

const LogSleep = props => {

    // const today = new Date().toISOString().substr(0, 10);
    // ? Is it better to create a new variable here, or do it in initial state of sleepText? This date is used to default the input element below. 

    const [sleepText, setSleepText] = useState({
        date: new Date().toISOString().substr(0, 10),
        durationHours: 6,
        durationMinutes: 5,
        score: 76,
        bedtime: "22:45"
    });

    const handleChanges = e => {
        setSleepText({
            ...sleepText,
            [e.target.name]: e.target.type === 'number' ? +e.target.value : e.target.value
        });
    };

    // console.log(sleepText);

    console.log(sleepText.date)

    const handleSubmit = e => {
        e.preventDefault();
        props.addSleep(sleepText);
        props.history.push(`/sleep/${sleepText.date}`)
    };

    return (

        <main>
            <h2>
                Log sleep
            </h2>

            <form className="logsleepform">

                <input
                    type="date"
                    name="date"
                    value={sleepText.date}
                    onChange={handleChanges}
                    aria-label="Date"
                    className="logsleepdate"

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
                        onChange={handleChanges}
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
                        onChange={handleChanges}
                    />
                    <label htmlFor="durationMinutes">
                        minutes
                    </label>
                </fieldset>

                <label htmlFor="score"><h3>Sleep score</h3></label>

                <input
                    type="number"
                    name="score"
                    min="0"
                    max="100"
                    onChange={handleChanges}
                />

                <label htmlFor="bedtime"><h3>Bedtime</h3></label>

                <input
                    type="time"
                    name="bedtime"
                    id="bedtime"
                    onChange={handleChanges}
                    required

                />
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