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
        padding: .9rem .9rem .9rem 0;
        border: 1px solid #dbdbdb;
        border-width: 0 0 1px;
        fontWeight: bold;
    }
    & td {
        padding: .9rem .9rem .9rem 0;
        border: 1px solid #dbdbdb;
        border-width: 0 0 1px;
    }
    & tr {
        border-bottom: 1px solid #dbdbdb
    }
    & a {
        color: #3273dc;
        cursor: pointer;
        text-decoration: none;
    }
`


const HealthData = ({ health, getHealth }) => {

    useEffect(() => {
        getHealth();
    }, [getHealth]);

    return (
        <Box pt='10' px={{ sm: '0', md: '8' }} fontFamily='body'>
            <Heading size='xl'>Daily data</Heading>
            <Box fontSize={{ sm: '.6rem', md: 'xl' }} textAlign='left' mt={8}>
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

                        {health.map((day, index) => (
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