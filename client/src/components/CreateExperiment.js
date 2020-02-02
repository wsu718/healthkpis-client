import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExperiment } from '../actions/actions';
import styled from "styled-components";

// Add conditional for if they have 7 days of data entered

const Button = styled.button`
margin-top: 20px;
`

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

            <form className="radioButtons">

                <input
                    type="radio"
                    value="Drink no alcohol"
                    id="alcohol"
                    onChange={handleSelect}
                    name="experiment"
                />

                <label htmlFor="alcohol">Drink no alcohol</label>

                <input
                    type="radio"
                    value="Go to sleep one hour earlier"
                    id="sleepearlier"
                    onChange={handleSelect}
                    name="experiment"
                />
                <label htmlFor="sleepearlier">Go to sleep one hour earlier</label>

                <input
                    type="radio"
                    value="Set temperature to 65 degrees"
                    id="temp"
                    onChange={handleSelect}
                    name="experiment"
                />
                <label htmlFor="temp">Set temperature to 65 degrees</label>

                <input
                    type="radio"
                    value="Don't eat 3 hours before bed"
                    id="eat"
                    onChange={handleSelect}
                    name="experiment"
                />
                <label htmlFor="eat">Don't eat 3 hours before bed</label>

                <Button onClick={handleSubmit}>Create new experiment</Button>


            </form>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        addExperiment: addExperiment,
    }
}

export default connect(mapStateToProps, { addExperiment })(CreateExperiment);