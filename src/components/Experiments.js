import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Experiments = props => {
    return (
        <div>
            <h2>Your experiments</h2>

            <table className="datatable">
                <thead>
                    <tr>
                        <th>Start date</th>
                        <th>Experiment</th>
                    </tr>
                </thead>
                <tbody>
                    {props.experiments.map((experiment, index) => (
                        <tr key={index}>
                            <td><Link to={`/experiment/${experiment.date}`}>{experiment.date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")}</Link></td>
                            <td>{experiment.experiment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link to="createexperiment"><button>Create new experiment</button></Link>

        </div >
    )
}

const mapStateToProps = state => {
    return {
        experiments: state.experiments
    }
}
export default connect(mapStateToProps, {})(Experiments);