import React from 'react';

const SleepData = props => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Score</th>
                        <th>Bedtime</th>
                    </tr>
                </thead>
                <tbody>
                    {props.sleepEntries.map((i, index) => (
                        <tr key={index}>
                            <td>{i.date}</td>
                            <td>{i.duration}</td>
                            <td>{i.score}</td>
                            <td>{i.bedtime}</td>
                        </tr>

                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default SleepData;