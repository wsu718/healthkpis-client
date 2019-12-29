import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExperiment } from '../actions/actions';

// Add conditional for if they have 7 days of data entered

const CreateExperiment = props => {

    const [experiment, setExperiment] = useState({
        date: '',
        experiment: ''
    });

    const handleSelect = e => {
        setExperiment({
            ...experiment,
            [e.target.name]: e.target.value,
            date: new Date().toISOString().substr(0, 10)
        })
    }

    console.log(experiment);

    const handleSubmit = e => {
        e.preventDefault();
        props.addExperiment(experiment);
        props.history.push(`/experiments`)
    };

    return (
        <div>
            <h2>Create your experiment</h2>
            <p>Experiments are each one week long</p>

            <form>
                <input
                    type="radio"
                    value="alcohol"
                    id="alcohol"
                    onChange={handleSelect}
                    name="experiment"
                />
                <label htmlFor="alcohol">Drink no alcohol</label>

                <input
                    type="radio"
                    value="sleepearlier"
                    id="sleepearlier"
                    onChange={handleSelect}
                    name="experiment"
                />
                <label htmlFor="sleepearlier">Go to sleep one hour earlier</label>

                <input
                    type="radio"
                    value="temp"
                    id="temp"
                    onChange={handleSelect}
                    name="experiment"
                />
                <label htmlFor="temp">Set temperature to 65 degrees</label>

                <input
                    type="radio"
                    value="eat"
                    id="eat"
                    onChange={handleSelect}
                    name="experiment"
                />
                <label htmlFor="eat">Don't eat 3 hours before bed</label>

                <button onClick={handleSubmit}>Create experiment</button>


            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        addExperiment: addExperiment,
    }
}

export default connect(mapStateToProps, { addExperiment })(CreateExperiment);