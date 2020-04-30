import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { addHealth } from '../actions';
import { connect } from 'react-redux';
import moment from 'moment';
import { Box, Heading, FormControl, FormLabel, Input, FormErrorMessage, Button, Flex } from '@chakra-ui/core';
import { TimePicker } from '@blueprintjs/datetime';

//Styling Blueprint's timepicker component 
import './AddDay.css';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";

/** @jsx jsx */
import { jsx } from '@emotion/core'

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
        health.week_of_year = moment(health.summary_date).week()
        addHealth(health);
        history.push('/data');
    }

    useEffect(() => {
        register({ name: "duration" })
    }, [register])

    return (
        <Box pt='10' px='8'>

            <Heading size='xl'>
                Add day
            </Heading>

            <Flex >
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
                        <FormLabel htmlFor='readiness'>Sleep duration</FormLabel>
                        <Box>
                            <TimePicker selectAllOnFocus='true' onChange={handleTimePicker} />
                        </Box>
                        <FormErrorMessage>
                            {/* Need to add error messages for this one */}
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

export default connect(null, { addHealth })(AddDay);