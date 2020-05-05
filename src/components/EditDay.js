import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getHealthByDate, updateHealth } from '../actions';
import { Box, Heading, FormControl, FormLabel, Input, FormErrorMessage, Button, Flex, useToast } from '@chakra-ui/core';
import moment from 'moment';
import { TimePicker } from '@blueprintjs/datetime';

//Styling Blueprint's timepicker component 
import './AddDay.css';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";

const EditDay = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const { date } = useParams();
    const healthByDate = useSelector(state => state.healthReducer.healthByDate)

    const { register, handleSubmit, errors, setValue, reset, watch } = useForm();

    useEffect(() => {
        dispatch(getHealthByDate(date))
    }, [date, dispatch])


    const [durationTime, setDurationTime] = useState();

    useEffect(() => {
        // Duration is returned as seconds; convert to hours and minutes

        if (healthByDate) {
            // let durationHours = Math.floor(healthByDate?.duration / 3600)
            // console.log(durationHours)
            // console.log(healthByDate?.duration)
            // let durationMinutes = Math.floor(healthByDate?.duration / 60) - (durationHours * 60)
            // // Sets default values for form inputs through React Hook Form

            // let duration = healthByDate?.duration;
            // durationDate = moment(healthByDate?.duration).add(duration, 's')
            // // console.log(durationDate)

            reset({
                score_total: healthByDate?.score_total,
                summary_date: healthByDate?.summary_date,
                bedtime_start: healthByDate?.bedtime_start,
                readiness: healthByDate?.readiness,
                hrv: healthByDate?.hrv,
                rhr: healthByDate?.rhr,
                weight: healthByDate?.weight,
                duration: healthByDate?.duration
            })
            setDurationTime(moment("Sun Dec 31 1899").add(healthByDate?.duration, 's').toDate())
        }
    }, [healthByDate, reset])




    const handleTimePicker = time => {
        // Want time in seconds
        // TimePicker sends time stamp that looks like this: Sun Dec 31 1899 04:11:00 GMT-0800 (Pacific Standard Time) -- need to convert the hour/min to a moment, then get difference since the start of that day in seconds
        setDurationTime(time)
        let duration = moment(time).diff(moment(time).startOf('day'), 'seconds')
        // console.log(`this is duration variable ${duration}`)
        setValue("duration", duration)
    }

    const onSubmit = healthEdits => {
        console.log(healthEdits)
        healthEdits.week_of_year = moment(healthEdits.summary_date).week()
        dispatch(updateHealth(healthByDate.id, healthEdits))
        history.push('/data');
    }

    useEffect(() => {
        register({ name: "duration" })
    }, [register])


    const watchYes = watch("duration")
    console.log(watchYes)

    return (

        <Box pt='10' px='8'>

            <Heading size='xl'>
                Edit day
            </Heading>

            <Flex>
                <form onSubmit={handleSubmit(onSubmit)} css={{
                    maxWidth: '20rem'
                }}>

                    <FormControl isInvalid={errors.summary_date} mt={6}>
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

                    <FormControl isInvalid={errors.score_total} mt={6}>
                        <FormLabel htmlFor='score_total'>Sleep score</FormLabel>
                        <Input type="number" name='score_total' ref={register({ required: 'This field is required.', max: { value: 99, message: 'The maximum score is 99.' }, min: { value: 1, message: 'The minimum score is 1.' } })} />

                        <FormErrorMessage>
                            {errors.score_total && <>{errors.score_total.message}</>}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.bedtime_start} mt={6}>
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

                    <FormControl mt={6}>
                        <FormLabel htmlFor='duration'>Sleep duration</FormLabel>
                        <TimePicker selectAllOnFocus='true' onChange={handleTimePicker} name='duration' aria-label='duration' value={durationTime} />

                        <FormErrorMessage>
                            {/* Need to add error messages */}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.readiness} mt={6}>
                        <FormLabel htmlFor='readiness'>Readiness</FormLabel>

                        <Input type="number" name='readiness' ref={register({ required: 'This field is required.', max: { value: 99, message: 'The maximum score is 99.' }, min: { value: 1, message: 'The minimum score is 1.' } })} />

                        <FormErrorMessage>
                            {errors.readiness && <>{errors.readiness.message}</>}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.hrv} mt={6}>
                        <FormLabel htmlFor='hrv'>HRV Avg</FormLabel>
                        <Input type="number" name='hrv' ref={register({ required: 'This field is required.', max: { value: 99, message: 'The maximum score is 99.' }, min: { value: 1, message: 'The minimum score is 1.' } })} />
                        <FormErrorMessage>
                            {errors.hrv && <>{errors.hrv.message}</>}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.rhr} mt={6}>
                        <FormLabel htmlFor='rhr'>RHR Avg</FormLabel>
                        <Input type="number" name='rhr' ref={register({ required: 'This field is required.', max: { value: 99, message: 'The maximum score is 99.' }, min: { value: 1, message: 'The minimum score is 1.' } })} />
                        <FormErrorMessage>
                            {errors.rhr && <>{errors.rhr.message}</>}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.weight} mt={6}>
                        <FormLabel htmlFor='weight'>Weight (lbs)</FormLabel>
                        <Input type="number" name='weight' ref={register({ max: { value: 500, message: 'The maximum weight is 500.' }, min: { value: 75, message: 'The minimum weight is 75.' } })} />
                        <FormErrorMessage>
                            {errors.weight && <>{errors.weight.message}</>}
                        </FormErrorMessage>
                    </FormControl>
                    <Button
                        mt={6}
                        variantColor="teal"
                        type="submit"
                    >
                        Submit
                 </Button>
                </form>


            </Flex>
        </Box>

        // <div>
        //     <main>
        //         <h2>
        //             Edit day
        //         </h2>
        //         <form className='adddayform' onSubmit={handleSubmit(onSubmit)}>
        //             <div className='form__input'>
        //                 <label htmlFor='date'>Date</label>
        //                 <input
        //                     type='date'
        //                     name='summary_date'
        //                     ref={register({ required: true })}
        //                     aria-label='Date'
        //                     className='adddaydate'
        //                 />
        //                 {errors.summary_date && <p className='error-message'>This field is required.</p>}
        //             </div>
        //             <div className='form__input'>
        //                 <label htmlFor='score'>Sleep score</label>
        //                 <input
        //                     type='number'
        //                     name='score_total'
        //                     min='0'
        //                     max='100'
        //                     ref={register({ required: true })}
        //                 />
        //                 {errors.score_total && <p className='error-message'>This field is required.</p>}


        //                 <div className='form__input'>
        //                     <label htmlFor='bedtime'>Bedtime</label>
        //                     <input
        //                         type='time'
        //                         name='bedtime_start'
        //                         id='bedtime'
        //                         ref={register({ required: true })}
        //                     />
        //                     {errors.bedtime_start && <p className='error-message'>This field is required.</p>}
        //                 </div>

        //                 <div className='form__input'>
        //                     <label >Sleep duration</label>
        //                     <div className='duration-container'>
        //                         <div>
        //                             <input
        //                                 type='number'
        //                                 name='durationHours'
        //                                 id='durationHours'
        //                                 min='0'
        //                                 max='24'
        //                                 aria-label='Duration Hours'
        //                                 ref={register({ required: true })}
        //                             // onChange={handleDurationChanges}
        //                             // required
        //                             />
        //                             <label htmlFor='durationHours'>hrs</label>
        //                         </div>
        //                         <div>
        //                             <input
        //                                 id='durationMinutes'
        //                                 type='number'
        //                                 name='durationMinutes'
        //                                 min='0'
        //                                 max='59'
        //                                 aria-label='Duration Minutes'
        //                                 ref={register({ required: true })}
        //                             // onChange={handleDurationChanges}
        //                             // required
        //                             />
        //                             <label htmlFor='durationMinutes'>
        //                                 mins
        //                             </label>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div className='form__input'>
        //                     <label htmlFor='readiness'>Readiness</label>
        //                     <input
        //                         type='number'
        //                         name='readiness'
        //                         id='readiness'
        //                         min='0'
        //                         max='100'
        //                         ref={register({ required: true })}
        //                     />
        //                     {errors.readiness && <p className='error-message'>This field is required.</p>}

        //                 </div>
        //                 <div className='form__input'>
        //                     <label htmlFor='hrv'>HRV avg</label>
        //                     <input
        //                         type='number'
        //                         name='hrv'
        //                         min='0'
        //                         max='100'
        //                         ref={register({ required: true })}
        //                     />
        //                     {errors.hrv && <p className='error-message'>This field is required.</p>}
        //                 </div>
        //                 <div className='form__input'>
        //                     <label htmlFor='rhr'>RHR avg</label>
        //                     <input
        //                         type='number'
        //                         name='rhr'
        //                         min='0'
        //                         max='100'
        //                         ref={register({ required: true })}
        //                     />
        //                     {errors.rhr && <p className='error-message'>This field is required.</p>}
        //                 </div>
        //                 <div className='form__input'>
        //                     <label htmlFor='weight'>Weight (lbs)</label>
        //                     <input
        //                         type='number'
        //                         name='weight'
        //                         min='0'
        //                         max='500'
        //                         ref={register}
        //                     />

        //                 </div>
        //                 <input type='submit' />
        //             </div>
        //         </form>
        //     </main>
        // </div>
    )
}

export default EditDay;