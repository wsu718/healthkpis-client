import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getHealthByDate, updateHealth } from '../actions';
import moment from 'moment';

const EditDay = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const { date } = useParams();
    const healthByDate = useSelector(state => state.healthReducer.healthByDate)

    const { register, handleSubmit, errors, reset } = useForm();

    useEffect(() => {
        dispatch(getHealthByDate(date))
    }, [date, dispatch])

    useEffect(() => {
        // Duration is returned as seconds; convert to hours and minutes
        let durationHours = Math.floor(healthByDate?.duration / 3600)
        let durationMinutes = Math.floor(healthByDate?.duration / 60) - (durationHours * 60)
        if (healthByDate) {
            // Sets default values for form inputs through React Hook Form
            reset({
                score_total: healthByDate?.score_total,
                summary_date: healthByDate?.summary_date,
                bedtime_start: healthByDate?.bedtime_start,
                durationHours: durationHours,
                durationMinutes: durationMinutes,
                readiness: healthByDate?.readiness,
                hrv: healthByDate?.hrv,
                rhr: healthByDate?.rhr,
                weight: healthByDate?.weight
            })
        }
    }, [healthByDate, reset])


    const onSubmit = healthEdits => {
        healthEdits.weekOfYear = moment(healthEdits.summary_date).week()
        dispatch(updateHealth(healthByDate.id, healthEdits))
        history.push('/data');
    }

    return (

        <div>
            <main>
                <h2>
                    Edit day
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
                                    // onChange={handleDurationChanges}
                                    // required
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
                                        ref={register({ required: true })}
                                    // onChange={handleDurationChanges}
                                    // required
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
                    </div>
                </form>
            </main>
        </div>
    )
}

export default EditDay;