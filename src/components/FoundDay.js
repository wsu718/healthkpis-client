import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { deleteHealth } from '../actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Heading, Stat, StatLabel, StatNumber, Button, Box, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/core';
import moment from 'moment';

/** @jsx jsx */
import { jsx } from '@emotion/core'

const FoundDay = ({ health, date, deleteHealth }) => {

    const [isOpen, setIsOpen] = useState();
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef();

    let history = useHistory();

    const handleDelete = () => {
        deleteHealth(health.id)
        history.push(`/data`)
    }

    return (
        <Box pt='10' px={{ sm: '0', md: '8' }}>
            <Heading size='xl'>
                {date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2 / $3 / $1")}
            </Heading>

            <Box mt={8}>
                <Stat mb={4}>
                    <StatLabel fontSize='sm' color='gray.600' fontWeight='medium'> Sleep score</StatLabel>
                    <StatNumber mt={1}>{health.score_total}</StatNumber>
                </Stat>

                <Stat mb={4}>
                    <StatLabel fontSize='sm' color='gray.600' fontWeight='medium'>Duration</StatLabel>
                    <StatNumber mt={1}>
                        {moment.duration(health.duration * 1000).hours()}h {moment.duration(health.duration * 1000).minutes()}m
                    </StatNumber>
                </Stat>


                <Stat mb={4}>
                    <StatLabel fontSize='sm' color='gray.600' fontWeight='medium'>Bedtime</StatLabel>
                    <StatNumber mt={1}>
                        {moment(health.bedtime_start, ["HH:mm"]).format('hh[:]mm A')}
                    </StatNumber>
                </Stat>

                <Stat mb={4}>
                    <StatLabel fontSize='sm' color='gray.600' fontWeight='medium'>Readiness</StatLabel>
                    <StatNumber mt={1}>{health.readiness}</StatNumber>
                </Stat>

                <Stat mb={4}>
                    <StatLabel fontSize='sm' color='gray.600' fontWeight='medium'>HRV</StatLabel>
                    <StatNumber mt={1}>{health.hrv}</StatNumber>
                </Stat>

                <Stat mb={4}>
                    <StatLabel fontSize='sm' color='gray.600' fontWeight='medium'>RHR</StatLabel>
                    <StatNumber mt={1}>{health.rhr}</StatNumber>
                </Stat>

                <Stat mb={4}>
                    <StatLabel fontSize='sm' color='gray.600' fontWeight='medium'>Weight</StatLabel>
                    <StatNumber mt={1}>{health.weight}</StatNumber>
                </Stat>
            </Box >
            <Box mt={6}>
                <Button onClick={() => setIsOpen(true)} variantColor='red' variant='outline'>Delete</Button>

                <Button ml={4} variant="solid">
                    <Link
                        to={`/day/${date}/edit`}
                        css={{
                            '&:hover':
                            {
                                textDecoration: 'none',
                                color: '#1A202C'
                            }
                        }}
                    >
                        Edit
                    </Link>
                </Button>

                <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                >
                    <AlertDialogOverlay />
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Day
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You won't be able to undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button variantColor="red" onClick={onClose} onClick={handleDelete} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </Box>
        </Box >
    )
}

export default connect(null, { deleteHealth })(FoundDay);