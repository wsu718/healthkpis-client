import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { addHealth } from '../actions';
import { connect } from 'react-redux';
import moment from 'moment';

import './AddDay.css';

const AddDay = ({ addHealth }) => {
    const { register, handleSubmit, errors } = useForm();

    let history = useHistory();

    const onSubmit = health => {
        // Uses date from date input to determine the week of the year
        health.weekOfYear = moment(health.summary_date).week()
        addHealth(health);
        history.push('/data');
    }

    return (
        <div>
            <main>
                <h2>
                    Add day
                </h2>
                <form className='adddayform' onSubmit={handleSubmit(onSubmit)}>
                    <div className='form__input'>
                        <label htmlFor='date'>Date</label>
                        <input
                            type='date'
                            name='summary_date'
                            ref={register({ required: true })}
                            aria-label='Date'
                            className='adddaydate'
                            defaultValue={new Date().toISOString().substr(0, 10)}
                        />
                        {errors.summary_date && <p className='error-message'>This field is required.</p>}
                    </div>
                    <div className='form__input'>
                        <label htmlFor='score'>Sleep score</label>
                        <input
                            type='number'
                            name='score_total'
                            min='0'
                            max='100'
                            ref={register({ required: true })}
                        />
                        {errors.score_total && <p className='error-message'>This field is required.</p>}
                    </div>
                    <div className='form__input'>
                        <label htmlFor='bedtime'>Bedtime</label>
                        <input
                            type='time'
                            name='bedtime_start'
                            id='bedtime'
                            ref={register({ required: true })}
                        />
                        {errors.bedtime_start && <p className='error-message'>This field is required.</p>}
                    </div>
                    <div className='form__input'>
                        <label >Sleep duration</label>
                        <div className='duration-container'>
                            <div>
                                <input
                                    type='number'
                                    name='durationHours'
                                    id='durationHours'
                                    min='0'
                                    max='24'
                                    aria-label='Duration Hours'
                                    ref={register({ required: true })}
                                />
                                <label htmlFor='durationHours'>hrs</label>
                            </div>
                            <div>
                                <input
                                    id='durationMinutes'
                                    type='number'
                                    name='durationMinutes'
                                    min='0'
                                    max='59'
                                    aria-label='Duration Minutes'
                                    ref={register}
                                />
                                <label htmlFor='durationMinutes'>
                                    mins
                                    </label>
                            </div>
                        </div>
                    </div>
                    <div className='form__input'>
                        <label htmlFor='readiness'>Readiness</label>
                        <input
                            type='number'
                            name='readiness'
                            id='readiness'
                            min='0'
                            max='100'
                            ref={register({ required: true })}
                        />
                        {errors.readiness && <p className='error-message'>This field is required.</p>}

                    </div>
                    <div className='form__input'>
                        <label htmlFor='hrv'>HRV avg</label>
                        <input
                            type='number'
                            name='hrv'
                            min='0'
                            max='100'
                            ref={register({ required: true })}
                        />
                        {errors.hrv && <p className='error-message'>This field is required.</p>}
                    </div>
                    <div className='form__input'>
                        <label htmlFor='rhr'>RHR avg</label>
                        <input
                            type='number'
                            name='rhr'
                            min='0'
                            max='100'
                            ref={register({ required: true })}
                        />
                        {errors.rhr && <p className='error-message'>This field is required.</p>}
                    </div>
                    <div className='form__input'>
                        <label htmlFor='weight'>Weight (lbs)</label>
                        <input
                            type='number'
                            name='weight'
                            min='0'
                            max='500'
                            ref={register}
                        />
                    </div>
                    <input type='submit' />
                </form>
            </main>
        </div>
    )
}

export default connect(null, { addHealth })(AddDay);