import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSleep } from '../actions/actions';
import { useAuth0 } from "../react-auth0-spa";


// const OldSleepData = props => {

//     useEffect(() => {
//         props.getSleep();

//     },
//         [])


//     return (
//         <div>
//             <h2>Your sleep data</h2>

//             <table className="datatable">
//                 <thead>
//                     <tr>
//                         <th>Date</th>
//                         <th>Duration</th>
//                         <th>Sleep score</th>
//                         <th>Bedtime</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {props.sleepEntries.map((sleep, index) => (
//                         <tr key={index}>
//                             <td><Link to={`/sleep/${sleep.summary_date}`}>{sleep.summary_date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")}</Link></td>
//                             <td>{sleep.duration}</td>
//                             <td>{sleep.score_total}</td>
//                             <td>{sleep.bedtime_start}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//         </div >
//     )
// }

const SleepData = props => {
    const [showResult, setShowResult] = useState(false);
    const [apiMessage, setApiMessage] = useState("");
    const { getTokenSilently } = useAuth0();
    const [sleepEntries, setSleepEntries] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getTokenSilently();

                const response = await fetch("http://localhost:5000/api/sleep", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const responseData = await response.json();
                // const responseData = await response;

                setShowResult(true);
                // setApiMessage(responseData);
                setSleepEntries(responseData)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [])

    return (


        <div>
            <h2>Your sleep data</h2>
            {/* <button onClick={callApi}>Ping API</button> */}
            {/* {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>} */}
            <table className="datatable">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Sleep score</th>
                        <th>Bedtime</th>
                    </tr>
                </thead>
                <tbody>
                    {sleepEntries.map((sleep, index) => (
                        <tr key={index}>
                            <td><Link to={`/sleep/${sleep.summary_date}`}>{sleep.summary_date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")}</Link></td>
                            <td>{sleep.duration}</td>
                            <td>{sleep.score_total}</td>
                            <td>{sleep.bedtime_start}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div >
    )
}

const mapStateToProps = state => {
    return {
        // sleepEntries: state.sleepEntries
    }
}

export default connect(mapStateToProps, { getSleep })(SleepData);