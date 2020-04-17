import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHealthByDate } from '../actions'

const ViewDay = ({ health }) => {
    const { date } = useParams();

    const [healthToday, setHealthToday] = useState({
        id: '',
        user_id: '',
        summary_date: '',
        score_total: '',
        bedtime_start: '',
        duration: '',
        readiness: '',
        hrv: '',
        rhr: '',
        weight: '',
        updated: false
    })


    useEffect(() => {
        const healthLookup = health.find(day => day.summary_date === date)
        if (healthLookup) {
            setHealthToday(healthLookup)
        }

    }, [date, health]);

    return (
        <div>
            <h2>
                {date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")}
            </h2>

            <h2>
                {healthToday.updated === false ? <div>It appears there has been a mistake.</div> : <></>}
            </h2>

            <div>

                <p>Sleep score</p>

                <p>{healthToday.score_total}</p>
            </div>

            <div>
                <p>Duration</p>
                <p>{healthToday.duration}</p>
            </div>

            <div>
                <p>Bedtime</p>
                <p>{healthToday.bedtime_start}</p>
            </div>

            <div>
                <p>Readiness</p>
                <p>{healthToday.readiness}</p>
            </div>

            <div>
                <p>HRV</p>
                <p>{healthToday.hrv}</p>
            </div>

            <div>
                <p>RHR</p>
                <p>{healthToday.rhr}</p>
            </div>

            <div>
                <p>Weight</p>
                <p>{healthToday.weight}</p>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        health: state.healthReducer.health
    }
}

export default connect(mapStateToProps, {})(ViewDay);