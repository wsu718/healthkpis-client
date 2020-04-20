import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FoundDay from './FoundDay';
import MissingDay from './MissingDay';

const ViewDay = () => {
    const { date } = useParams();

    // Replaces mapStateToProps and gives access to useParams hook inside component 
    const health = useSelector(state => state.healthReducer.health.find(day => day.summary_date === date));


    if (health) {
        return <FoundDay health={health} date={date} />
    } else {
        return <MissingDay />
    }

}

export default ViewDay;