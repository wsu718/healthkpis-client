import React from 'react';

const LogSleep = () => {
    return (
        <main>
            <h2>
                Log sleep
            </h2>
            <form>
                <p>
                    02/20/20
                </p>

                <label>
                    Sleep duration
                    <input />
                </label>

                <label>
                    Sleep score
                    <input />
                </label>

                <label>
                    Bedtime
                    <input />
                </label>

                <button>
                    Log sleep
                </button>
            </form>
        </main>

    )
}

export default LogSleep;