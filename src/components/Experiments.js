import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Experiments = props => {
    return (
        <div>
            <h2><Link to="createexperiment">Create experiment</Link></h2>

            <table>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Start date</th>
                        <th>Experiment</th>
                    </tr>
                </thead>
                <tbody>
                    {props.experiments.map((experiment, index) => (
                        <tr key={index}>
                            <td><Link to={`/experiment/${experiment.date}`}>{experiment.date}</Link></td>
                            <td></td>
                            <td>{experiment.date}</td>
                            <td>{experiment.experiment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div >
    )
}

const mapStateToProps = state => {
    return {
        experiments: state.experiments
    }
}
export default connect(mapStateToProps, {})(Experiments);