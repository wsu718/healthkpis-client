import React from 'react';
import { useAuth0 } from "../react-auth0-spa";
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import './AddDay.css';

const AddDay = props => {
    const { register, handleSubmit } = useForm();
    const { getTokenSilently } = useAuth0();
    let history = useHistory();

    const onSubmit = async data => {
        try {
            const token = await getTokenSilently();
            const response = await fetch(process.env.REACT_APP_API_URL, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error(error);
        }
        history.push("/data");
    }

    return (
        <div>
            <main>
                <h2>
                    Add day
                </h2>
                <form className="adddayform" onSubmit={handleSubmit(onSubmit)}>
                    <div className='form__input'>
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            name="summary_date"
                            ref={register}
                            aria-label="Date"
                            className="adddaydate"
                            defaultValue={new Date().toISOString().substr(0, 10)}
                        />
                    </div>
                    <div className='form__input'>
                        <label htmlFor="score">Sleep score</label>
                        <input
                            type="number"
                            name="score_total"
                            min="0"
                            max="100"
                            ref={register}
                        />
                        <div className='form__input'>
                            <label htmlFor="bedtime">Bedtime</label>
                            <input
                                type="time"
                                name="bedtime_start"
                                id="bedtime"
                                ref={register}
                            />
                        </div>
                        <div className='form__input'>
                            <label >Sleep duration</label>
                            <div className="duration-container">
                                <div>
                                    <input
                                        type="number"
                                        name="durationHours"
                                        id="durationHours"
                                        min="0"
                                        max="24"
                                        aria-label="Duration Hours"
                                        ref={register}
                                    />
                                    <label htmlFor="durationHours">hrs</label>
                                </div>
                                <div>
                                    <input
                                        id="durationMinutes"
                                        type="number"
                                        name="durationMinutes"
                                        min="0"
                                        max="59"
                                        aria-label="Duration Minutes"
                                        ref={register}
                                    />
                                    <label htmlFor="durationMinutes">
                                        mins
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='form__input'>
                            <label htmlFor="readiness">Readiness</label>
                            <input
                                type="number"
                                name="readiness"
                                id="readiness"
                                min="0"
                                max="100"
                                ref={register}
                            />
                        </div>
                        <div className='form__input'>
                            <label htmlFor="hrv">HRV avg</label>
                            <input
                                type="number"
                                name="hrv"
                                min="0"
                                max="100"
                                ref={register}
                            />
                        </div>
                        <div className='form__input'>
                            <label htmlFor="rhr">RHR avg</label>
                            <input
                                type="number"
                                name="rhr"
                                min="0"
                                max="100"
                                ref={register}
                            />
                        </div>
                        <div className='form__input'>
                            <label htmlFor="weight">Weight (lbs)</label>
                            <input
                                type="number"
                                name="weight"
                                min="0"
                                max="500"
                                ref={register}
                            />
                        </div>
                        <input type="submit" />
                    </div>
                </form>
            </main>
        </div>
    )
}

export default AddDay;