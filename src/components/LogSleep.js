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
        bedtimeHour: 10,
        bedtimeMinutes: 45,
        bedtimeAMPM: 'PM',
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

            <form>
                <label htmlFor="date">
                    Date
                </label>
                <input
                    type="date"
                    name="date"
                    value={sleepText.date}
                    onChange={handleChanges}
                />

                <fieldset>
                    <legend>
                        Sleep duration
                    </legend>
                    <input
                        type="number"
                        name="durationHours"
                        min="0"
                        max="24"
                        onChange={handleChanges}
                    />
                    <label htmlFor="durationHours">
                        hours
                    </label>
                    <input
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

                <label htmlFor="score">Sleep score</label>

                <input
                    type="number"
                    name="score"
                    min="0"
                    max="100"
                    onChange={handleChanges}
                />

                <fieldset>
                    <legend>Bedtime</legend>

                    <input
                        type="number"
                        name="bedtimeHour"
                        onChange={handleChanges}
                        aria-label="Bedtime Hour"
                        min="1"
                        max="12"
                    />


                    <input
                        type="number"
                        name="bedtimeMinutes"
                        onChange={handleChanges}
                        aria-label="Bedtime Minutes"
                        min="0"
                        max="59"
                    />

                    <select name="bedtimeAMPM" aria-label="PM or AM" onChange={handleChanges}>
                        <option value="PM">PM</option>
                        <option value="AM">AM</option>
                    </select>


                </fieldset>

                <button onClick={handleSubmit}>
                    Log sleep
                </button>


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