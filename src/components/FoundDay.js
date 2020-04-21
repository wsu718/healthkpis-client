import React from 'react';
import { Link } from 'react-router-dom';
import { deleteHealth } from '../actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';


const FoundDay = ({ health, date, deleteHealth }) => {

    let history = useHistory();

    const handleDelete = () => {
        deleteHealth(health.id)
        history.push(`/data`)
    }

    return (
        <div>
            <h2>
                {date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")}
            </h2>

            <div>

                <p>Sleep score</p>
                <p>{health.score_total}</p>
            </div>

            <div>
                <p>Duration</p>
                <p>{health.duration}</p>
            </div>
            <div>
                <p>Bedtime</p>
                <p>{health.bedtime_start}</p>
            </div>

            <div>
                <p>Readiness</p>
                <p>{health.readiness}</p>
            </div>

            <div>
                <p>HRV</p>
                <p>{health.hrv}</p>
            </div>

            <div>
                <p>RHR</p>
                <p>{health.rhr}</p>
            </div>

            <div>
                <p>Weight</p>
                <p>{health.weight}</p>
            </div>

            <button onClick={handleDelete}>Delete</button>

            <Link to={`/day/${date}/edit`}><button>Edit</button></Link>

        </div>
    )
}

export default connect(null, { deleteHealth })(FoundDay);