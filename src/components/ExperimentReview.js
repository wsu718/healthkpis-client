import React from 'react';
import { connect } from 'react-redux';
// import Moment from 'react-moment';
import moment from 'moment';

const ExperimentReview = props => {

    const experimentDate = props.match.params.experimentDate;
    const experimentName = props.experiments.find(e => e.date === experimentDate).experiment
    const today = moment();
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

    // Create function that 

    return (
        <div>
            <h2>Experiment is {experimentStatus}!</h2>
            <p>Challenge start date: {experimentDate}</p>
            <p>Challenge name: {experimentName}</p>

            <table className="datatable">
                <thead>
                    <tr>
                        <th></th>
                        <th>Change</th>
                        <th>Experiment week</th>
                        <th>Week prior</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Sleep duration</th>
                        <td>+11%</td>
                        <td>7 hrs, 4 min </td>
                        <td>6 hrs, 3 min</td>
                    </tr>
                    <tr>
                        <th>Sleep score</th>
                        <td>+11%</td>
                        <td>76</td>
                        <td>65</td>
                    </tr>
                    <tr>
                        <th>Bedtime</th>
                        <td>-20%</td>
                        <td>22:59</td>
                        <td>21:00</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        experiments: state.experiments
    }
}

export default connect(mapStateToProps, {})(ExperimentReview);