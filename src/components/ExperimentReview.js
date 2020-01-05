import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import moment from 'moment';

const ExperimentReview = props => {

    const experimentDate = props.match.params.experimentDate;
    const experimentName = props.experiments.find(e => e.date === experimentDate).experiment
    const today = moment();
    console.log(today)
    // console.log(experimentDate)
    // console.log(experimentEndDate)
    const experimentEndDate = moment(experimentDate).add(7, 'days')

    // set experimentStatus based on whether today is 7 days after the experiment was created
    let experimentStatus = ''
    if (today.isAfter(experimentEndDate)) {
        experimentStatus = 'complete'
    } else if (today.isAfter(experimentDate)) {
        experimentStatus = 'ongoing'
    } else {
        experimentStatus = 'complete'
    }

    console.log(experimentStatus)

    return (
        <div>
            <h2>Experiment is {experimentStatus}!</h2>
            <p>Challenge start date: {experimentDate}</p>
            <p>Challenge name: {experimentName}</p>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        experiments: state.experiments
    }
}

export default connect(mapStateToProps, {})(ExperimentReview);