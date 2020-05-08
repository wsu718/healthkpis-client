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
    const healthByDate = useSelector(state => state.healthReducer.healthByDate);
    const { register, handleSubmit, errors, setValue, reset } = useForm();
    const [durationTime, setDurationTime] = useState();
    const toast = useToast();

    useEffect(() => {
        dispatch(getHealthByDate(date))
    }, [date, dispatch]);

    useEffect(() => {
        if (healthByDate) {
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

            // This is necessary because the Blueprint TimePicker wants it to look like this: Sun Dec 31 1899 04:11:00 GMT-0800 (Pacific Standard Time) -- need to convert the hour/min to a moment, then get difference since the start of that day in seconds

            setDurationTime(moment("Sun Dec 31 1899").add(healthByDate?.duration, 's').toDate())
        }
    }, [healthByDate, reset]);

    useEffect(() => {
        register({ name: "duration" })
    }, [register]);

    const handleTimePicker = time => {
        // Want time in seconds
        // TimePicker sends time stamp that looks like this: Sun Dec 31 1899 04:11:00 GMT-0800 (Pacific Standard Time) -- need to convert the hour/min to a moment, then get difference since the start of that day in seconds
        setDurationTime(time)
        let duration = moment(time).diff(moment(time).startOf('day'), 'seconds')
        setValue("duration", duration)
    };

    const onSubmit = healthEdits => {
        healthEdits.week_of_year = moment(healthEdits.summary_date).week()
        dispatch(updateHealth(healthByDate.id, healthEdits))
        toast({
            title: "Edited day.",
            description: "We've edited this day in your health data.",
            status: "success",
            duration: 5000,
            isClosable: true,
        })
        history.push('/data');
    };

    return (
        <Box py={8} px={8} maxW='50rem' mx='auto'>

            <Heading size='xl' px={{ xs: '6', md: '0' }}>
                Edit day
            </Heading>

            <Flex bg='white' px={6} pb={4} mt={4} shadow='sm' rounded='lg' overflow='hidden'>
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
    )
}

export default EditDay;