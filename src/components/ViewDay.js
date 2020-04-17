import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHealthByDate } from '../actions'

const ViewDay = ({ healthByDate, getHealthByDate }) => {
    const { date } = useParams();

    useEffect(() => {
        getHealthByDate(date);
    }, [getHealthByDate]);

    console.log(healthByDate)

    return (
        <div>
            <h2>
                {date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")}
            </h2>

            <div>
                <p>Sleep score</p>

                <p>{healthByDate.score_total}</p>
            </div>

            <div>
                <p>Duration</p>
                <p>{healthByDate.duration}</p>
            </div>

            <div>
                <p>Bedtime</p>
                <p>{healthByDate.bedtime_start}</p>
            </div>

            <div>
                <p>Readiness</p>
                <p>{healthByDate.readiness}</p>
            </div>

            <div>
                <p>HRV</p>
                <p>{healthByDate.hrv}</p>
            </div>

            <div>
                <p>RHR</p>
                <p>{healthByDate.rhr}</p>
            </div>

            <div>
                <p>Weight</p>
                <p>{healthByDate.weight}</p>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        healthByDate: state.healthReducer.healthByDate
    }
}

export default connect(mapStateToProps, { getHealthByDate })(ViewDay);