import React, { useState } from 'react';

const LogSleep = () => {

    const [sleepText, setSleepText] = useState({
        duration: null,
        score: null,
        bedtime: null
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
        </main>

    )
}

export default LogSleep;