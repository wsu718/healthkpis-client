import React from 'react';
// import { Link } from 'react-router-dom';
import { deleteHealth } from '../actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Heading, Stat, StatLabel, StatNumber, Button } from '@chakra-ui/core';

const FoundDay = ({ health, date, deleteHealth }) => {

    let history = useHistory();

    const handleDelete = () => {
        deleteHealth(health.id)
        history.push(`/data`)
    }

    return (
        <div>
            <Heading>
                {date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")}
            </Heading>

            <Stat>
                <StatLabel>Sleep score</StatLabel>
                <StatNumber>{health.score_total}</StatNumber>
            </Stat>

            <Stat>
                <StatLabel>Duration</StatLabel>
                <StatNumber>{health.duration}</StatNumber>
            </Stat>


            <Stat>
                <StatLabel>Bedtime</StatLabel>
                <StatNumber>{health.bedtime_start}</StatNumber>
            </Stat>

            <Stat>
                <StatLabel>Readiness</StatLabel>
                <StatNumber>{health.readiness}</StatNumber>
            </Stat>

            <Stat>
                <StatLabel>HRV</StatLabel>
                <StatNumber>{health.hrv}</StatNumber>
            </Stat>

            <Stat>
                <StatLabel>RHR</StatLabel>
                <StatNumber>{health.rhr}</StatNumber>
            </Stat>

            <Stat>
                <StatLabel>Weight</StatLabel>
                <StatNumber>{health.weight}</StatNumber>
            </Stat>

            <button onClick={handleDelete}>Delete</button>

            <Button onClick={handleDelete}>Delete</Button>

            {/* <Link to={`/day/${date}/edit`}><button>Edit</button></Link> */}

        </div>
    )
}

export default connect(null, { deleteHealth })(FoundDay);