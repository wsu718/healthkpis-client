import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSleep } from '../actions/actions';
import moment from 'moment';
import { useAuth0 } from "../react-auth0-spa";

const AddDay = props => {

    // const today = new Date().toISOString().substr(0, 10);
    // ? Is it better to create a new variable here, or do it in initial state of day? This date is used to default the input element below. 

    const [day, setDay] = useState({
        summary_date: new Date().toISOString().substr(0, 10),
        score_total: undefined,
        bedtime_start: undefined,
        duration: 0,
    });

    // const [showResult, setShowResult] = useState(false);
    const { getTokenSilently } = useAuth0();

    // console.log(day)

    // Convert duration to seconds instead of hours and minutes

    const handleDateChanges = e => {
        setDay({
            ...day,
            summary_date: e.target.value,
            bedtime_start: undefined
        });
    };

    const handleScoreChanges = e => {
        setDay({
            ...day,
            score_total: +e.target.value
        });
    };

    const handleChanges = e => {
        if (e.target.name === 'weight') {
            setDay({
                ...day,
                weight: +e.target.value
            })
        } else if (e.target.name === 'readiness') {
            setDay({
                ...day,
                readiness: +e.target.value
            })
        } else if (e.target.name === 'hrv') {
            setDay({
                ...day,
                hrv: +e.target.value
            })
        } else if (e.target.name === 'rhr') {
            setDay({
                ...day,
                rhr: +e.target.value
            })
        }
    }

    const handleDurationChanges = e => {
        if (e.target.name === 'durationHours') {
            setDay({
                ...day,
                duration: day.duration + (+e.target.value * 3600)
            })
        } else if (e.target.name === 'durationMinutes') {
            setDay({
                ...day,
                duration: day.duration + (+e.target.value * 60)
            })
        }
    }

    const handleBedtimeChanges = e => {
        setDay({
            ...day,
            bedtime_start: moment(`${day.summary_date} ${e.target.value}`).format(),
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const token = await getTokenSilently();

            const response = await fetch(process.env.REACT_APP_API_URL, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(day),
            });

            const responseData = await response.json();
            // const responseData = await response;

            console.log(responseData);
        } catch (error) {
            console.error(error);
        }

        // use this if move to reducer
        // props.addSleep(day);

        // redirect
        props.history.push(`/data`)
    };

    return (

        <main>
            <h2>
                Add day
            </h2>

            <form className="adddayform">

                <input
                    type="date"
                    name="summary_date"
                    value={day.summary_date}
                    onChange={handleDateChanges}
                    aria-label="Date"
                    className="adddaydate"

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

                <label htmlFor="readiness"><h3>Readiness</h3></label>

                <input
                    type="number"
                    name="readiness"
                    id="readiness"
                    min="0"
                    max="100"
                    onChange={handleChanges}
                />

                <label htmlFor="hrv"><h3>HRV avg</h3></label>

                <input
                    type="number"
                    name="hrv"
                    min="0"
                    max="100"
                    onChange={handleChanges}
                />

                <label htmlFor="rhr"><h3>RHR avg</h3></label>

                <input
                    type="number"
                    name="rhr"
                    min="0"
                    max="100"
                    onChange={handleChanges}
                />

                <label htmlFor="weight"><h3>Weight (lbs)</h3></label>

                <input
                    type="number"
                    name="weight"
                    min="0"
                    max="500"
                    onChange={handleChanges}
                />





                <p>
                    <button onClick={handleSubmit}>
                        Add Day
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

export default connect(mapStateToProps, { addSleep })(AddDay);