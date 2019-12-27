import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSleep } from '../actions/sleepActions';

import SleepData from './SleepData';



const LogSleep = props => {

    const [sleepText, setSleepText] = useState({
        duration: null,
        score: null,
        bedtime: null,
        date: new Date().toLocaleDateString()
        // Date will be handled by the server eventually
    });

    const handleChanges = e => {
        setSleepText({
            ...sleepText,
            [e.target.name]: e.target.type === 'number' ? +e.target.value : e.target.value,
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
                        type='number'
                        name='duration'
                        onChange={handleChanges}
                    />
                </label>

                <label>
                    Sleep score
                    <input
                        type='number'
                        name='score'
                        onChange={handleChanges}
                    />
                </label>

                <label>
                    Bedtime
                    <input
                        type='number'
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