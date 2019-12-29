import React from 'react';
import { connect } from 'react-redux';

const ExperimentReview = props => {

    const dayReviewing = props.match.params.experimentDate;

    console.log(dayReviewing)

    // This Day's Sleep
    const thisChallengeDate = props.experiments.find(e => e.date === dayReviewing).date
    const thisChallengeName = props.experiments.find(e => e.date === dayReviewing).experiment


    return (
        <div>

            <p>Challenge date: {thisChallengeDate}</p>
            <p>Challenge name: {thisChallengeName}</p>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        experiments: state.experiments
    }
}

export default connect(mapStateToProps, {})(ExperimentReview);