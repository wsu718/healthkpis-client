import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { getWeeks } from '../actions';
import { Heading, Box } from '@chakra-ui/core';

import styled from '@emotion/styled'

const Table = styled.table`
    min-width: 100%;
    & th {
        padding: .75rem 1.5rem;
        border-color: #e5e7eb;
        border-bottom-width: 1px;
        font-weight: 500;
        letter-spacing: .05em;
        text-transform: uppercase;
        color: #6b7280;
        font-size: .75rem;
        background-color: #f9fafb;
    }
    & tr {
        border-bottom: 1px solid #dbdbdb;
        background-color: #ffffff;
        & td {
            padding: 1rem 1.5rem;
            border: 1px solid #dbdbdb;
            border-width: 0 0 1px;
            color: #6b7280;
            line-height: 1.25rem;
            font-size: .875rem;
        }
    }
    & a {
        color: #161e2e;
        cursor: pointer;
        text-decoration: none;
        font-weight: 500;
    }
`

const Weeks = () => {
    const dispatch = useDispatch();
    const weeks = useSelector(state => state.healthReducer.weeks)

    useEffect(() => {
        dispatch(getWeeks());
    }, [dispatch]);

    return (
        <Box py='6' px={{ sm: '0', md: '8' }}>
            <Heading size='xl' px={{ sm: '6', md: '0' }}>
                Weekly data
            </Heading>
            <Box fontSize={{ sm: '.6rem', md: 'lg' }} textAlign='left' mt={8} shadow='sm' rounded='lg' overflow='hidden'>
                <Table>
                    <thead>
                        <tr>
                            <th>Week <br />number</th>
                            <th>Avg <br />Sleep score</th>
                            <th>Avg <br />Duration</th>
                            <th>Avg <br />Readiness</th>
                            <th>Avg <br />HRV</th>
                            <th>Avg <br />RHR</th>
                            <th>Avg <br />Weight</th>
                        </tr>
                    </thead>
                    <tbody>

                        {weeks.map((week, index) => (
                            <tr key={index}>
                                <td>{week.week_of_year}</td>
                                <td>{week.avg_score_total}</td>

                                <td>{moment.duration(week.avg_duration * 1000).hours()}h {moment.duration(week.avg_duration * 1000).minutes()}m</td>

                                <td>{week.avg_readiness}</td>
                                <td>{week.avg_hrv}</td>
                                <td>{week.avg_rhr}</td>
                                <td>{week.avg_weight}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Box>
        </Box>
    )
}

export default Weeks;