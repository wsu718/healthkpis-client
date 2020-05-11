import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getHealth } from '../actions';
import { connect } from 'react-redux';
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

const HealthData = ({ health, getHealth }) => {

    console.log(new moment(health[0]?.summary_date)?.format('YYYYMMDD'))
    // console.log(health[0]?.summary_date)

    useEffect(() => {
        getHealth();
    }, [getHealth]);

    return (
        <Box pt={6} px={{ xs: '0', md: '8' }} fontFamily='body'>
            <Heading size='xl' px={{ xs: '6', md: '0' }}>Daily data</Heading>
            <Box fontSize={{ xs: '.6rem', md: 'lg' }} textAlign='left' mt={8} shadow='sm' rounded='lg' overflow='hidden' overflowX='auto'>
                <Table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Sleep <br />score</th>
                            <th>Duration</th>
                            <th>Bedtime</th>
                            <th>Readiness</th>
                            <th>HRV</th>
                            <th>RHR</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Sort by date */}
                        {health.sort((a, b) => new moment(b.summary_date).format('YYYYMMDD') - new moment(a.summary_date).format('YYYYMMDD')).map((day, index) => (
                            <tr key={index}>
                                <td><Link to={`/day/${day.summary_date}`}>{day.summary_date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")}</Link></td>
                                <td>{day.score_total}</td>

                                <td>{moment.duration(day.duration * 1000).hours()}h {moment.duration(day.duration * 1000).minutes()}m</td>

                                <td>{moment(day.bedtime_start, ["HH:mm"]).format('hh[:]mm A')}</td>
                                <td>{day.readiness}</td>
                                <td>{day.hrv}</td>
                                <td>{day.rhr}</td>
                                <td>{day.weight}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => {
    return {
        health: state.healthReducer.health
    };
};

export default connect(mapStateToProps, { getHealth })(HealthData);