import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { addHealth } from '../actions';
import { connect } from 'react-redux';
import moment from 'moment';
import { Box, Heading, FormControl, FormLabel, Input, FormErrorMessage, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Stack } from '@chakra-ui/core';
import { TimePicker } from '@blueprintjs/datetime';

import './AddDay.css';

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css"

const AddDay = ({ addHealth }) => {
    const { register, handleSubmit, errors, setValue } = useForm();

    let history = useHistory();

    const handleTimePicker = time => {
        // Want time in seconds
        // TimePicker sends time stamp that looks like this: Sun Dec 31 1899 04:11:00 GMT-0800 (Pacific Standard Time) -- need to convert the hour/min to a moment, then get difference since the start of that day in seconds
        let duration = moment(time).diff(moment(time).startOf('day'), 'seconds')
        console.log(`this is duration variable ${duration}`)
        setValue("duration", duration)

    }

    const onSubmit = health => {
        // Uses date from date input to determine the week of the year
        // health.duration = duration
        console.log(health)
        // health.week_of_year = moment(health.summary_date).week()
        // addHealth(health);
        // history.push('/data');
    }

    useEffect(() => {
        register({ name: "duration" })
    }, [register])

    return (
        <Box pt='10' px='8'>
            <Heading size='xl'>
                Add day
            </Heading>


            <form onSubmit={handleSubmit(onSubmit)}>

                <FormControl isInvalid={errors.summary_date}>
                    <FormLabel htmlFor='summary_date'>Date</FormLabel>
                    <Input
                        type='date'
                        name='summary_date'
                        ref={register({ required: 'This field is required.' })}
                        defaultValue={new Date().toISOString().substr(0, 10)}
                    />
                    <FormErrorMessage>
                        {errors.sumary_date && <>{errors.summary_date.message}</>}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.score_total}>
                    <FormLabel htmlFor='score_total'>Sleep score</FormLabel>
                    <NumberInput min={0} max={99}>
                        <NumberInputField type="number" name='score_total' ref={register({ required: 'This field is required.', max: { value: 99, message: 'The maximum score is 99.' }, min: { value: 1, message: 'The minimum score is 1.' } })} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormErrorMessage>
                        {errors.score_total && <>{errors.score_total.message}</>}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.bedtime_start}>
                    <FormLabel htmlFor='bedtime_start'>Bedtime</FormLabel>
                    <Input
                        type='time'
                        name='bedtime_start'
                        ref={register({ required: 'This field is required.' })}
                        defaultValue={new Date().toISOString().substr(0, 10)}
                    />
                    <FormErrorMessage>
                        {errors.bedtime_start && <>{errors.bedtime_start.message}</>}
                    </FormErrorMessage>
                </FormControl>

                {/* Prob need a Stack, two number inputs */}

                {/* <div className='form__input'>
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
                </div> */}

                {/* <FormControl isInvalid={errors.duration}>
                    <Stack direction='row'>
                        <FormLabel htmlFor='readiness'>Sleep duration</FormLabel>
                        <NumberInput min={0} max={99}>
                            <NumberInputField type="number" name='readiness' ref={register({ required: 'This field is required.', max: { value: 99, message: 'The maximum score is 99.' }, min: { value: 1, message: 'The minimum score is 1.' } })} />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>

                        <FormErrorMessage>
                            {errors.readiness && <>{errors.readiness.message}</>}
                        </FormErrorMessage>
                    </Stack>
                </FormControl> */}

                <FormControl isInvalid={errors.readiness}>
                    <FormLabel htmlFor='readiness'>Readiness</FormLabel>
                    <NumberInput min={0} max={99}>
                        <NumberInputField type="number" name='readiness' ref={register({ required: 'This field is required.', max: { value: 99, message: 'The maximum score is 99.' }, min: { value: 1, message: 'The minimum score is 1.' } })} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormErrorMessage>
                        {errors.readiness && <>{errors.readiness.message}</>}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.hrv}>
                    <FormLabel htmlFor='hrv'>HRV Avg</FormLabel>
                    <NumberInput min={0} max={99}>
                        <NumberInputField type="number" name='hrv' ref={register({ required: 'This field is required.', max: { value: 99, message: 'The maximum score is 99.' }, min: { value: 1, message: 'The minimum score is 1.' } })} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormErrorMessage>
                        {errors.hrv && <>{errors.hrv.message}</>}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.rhr}>
                    <FormLabel htmlFor='rhr'>RHR Avg</FormLabel>
                    <NumberInput min={0} max={99}>
                        <NumberInputField type="number" name='rhr' ref={register({ required: 'This field is required.', max: { value: 99, message: 'The maximum score is 99.' }, min: { value: 1, message: 'The minimum score is 1.' } })} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormErrorMessage>
                        {errors.rhr && <>{errors.rhr.message}</>}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.weight}>
                    <FormLabel htmlFor='weight'>Weight (lbs)</FormLabel>
                    <NumberInput min={0} max={99}>
                        <NumberInputField type="number" name='weight' ref={register({ max: { value: 500, message: 'The maximum weight is 500.' }, min: { value: 75, message: 'The minimum weight is 75.' } })} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormErrorMessage>
                        {errors.weight && <>{errors.weight.message}</>}
                    </FormErrorMessage>
                </FormControl>

                {/* <div>


                    <TimePicker selectAllOnFocus='true' onChange={handleTimePicker} />
                </div> */}



                <input type='submit' />
            </form>

            {/* <form className='adddayform' onSubmit={handleSubmit(onSubmit)}>
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
            </form> */}

        </Box >

    )
}

export default connect(null, { addHealth })(AddDay);