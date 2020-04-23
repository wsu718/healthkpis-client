import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { getWeeks } from '../actions';

const Weeks = () => {
    const dispatch = useDispatch();
    const weeks = useSelector(state => state.healthReducer.weeks)

    useEffect(() => {
        dispatch(getWeeks());
    }, [getWeeks, dispatch]);

    return (


        <div>
            <h2>Weekly data</h2>
            <table className="datatable">
                <thead>
                    <tr>
                        <th>Week number</th>
                        <th>Avg Sleep score</th>
                        <th>Avg Duration</th>
                        <th>Avg Bedtime</th>
                        <th>Avg Readiness</th>
                        <th>Avg HRV</th>
                        <th>Avg RHR</th>
                        <th>Avg Weight</th>
                    </tr>
                </thead>
                <tbody>

                    {weeks.map((week, index) => (
                        <tr key={index}>
                            <td>{week.week_of_year}</td>
                            <td>{week.avg_score_total}</td>

                            <td>{moment.duration(week.avg_duration * 1000).hours()}h {moment.duration(week.avg_duration * 1000).minutes()}m</td>

                            <td>{week.avg_readiness}</td>
                            <td>{week.avg_hrv}</td>
                            <td>{week.avg_rhr}</td>
                            <td>{week.avg_weight}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Weeks;