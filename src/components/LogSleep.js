import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSleep } from '../actions/sleepActions';

import SleepData from './SleepData';
import { sleepReducer } from '../reducers/sleepReducer';


const LogSleep = props => {

    const [sleepText, setSleepText] = useState({
        duration: null,
        score: null,
        bedtime: null,
        date: 101020
    });

    const handleChanges = e => {
        // console.log(e.target.value)
        setSleepText({
            ...sleepText,
            [e.target.name]: e.target.value,
        });
    };

    // console.log(sleepText);


    const handleSubmit = e => {
        e.preventDefault();
        props.addSleep(sleepText);
    };

    return (

        <main>
            <h2>
                Log sleep
            </h2>

            <form>
                <label>
                    Sleep duration
                    <input
                        type='text'
                        name='duration'
                        onChange={handleChanges}
                    />
                </label>

                <label>
                    Sleep score
                    <input
                        type='text'
                        name='score'
                        onChange={handleChanges}
                    />
                </label>

                <label>
                    Bedtime
                    <input
                        type='text'
                        name='bedtime'
                        onChange={handleChanges}
                    />
                </label>

                <button onClick={handleSubmit}>
                    Log sleep
                </button>
            </form>

            <section>
                <SleepData sleepEntries={props.sleepEntries} />

                {props.sleepEntries.map(i => (
                    <p>{i.duration}</p>
                ))}
            </section>
        </main>
    )
}

const mapStateToProps = state => {
    return {
        addSleep: addSleep,
        sleepEntries: state.sleepEntries
    }

}

export default connect(mapStateToProps, { addSleep })(LogSleep);