import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { deleteHealth } from '../actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Heading, Stat, StatLabel, StatNumber, Button, Box, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useToast, Flex } from '@chakra-ui/core';
import moment from 'moment';

/** @jsx jsx */
import { jsx } from '@emotion/core'

const FoundDay = ({ health, date, deleteHealth }) => {

    const [isOpen, setIsOpen] = useState();
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef();

    let history = useHistory();

    const toast = useToast();


    const handleDelete = () => {
        deleteHealth(health.id);
        setIsOpen(false);
        toast({
            title: "Deleted day.",
            description: "We deleted your day.",
            status: "error",
            duration: 5000,
            isClosable: true,
        });
        history.push(`/data`);
    }

    return (
        <Box py={6} px={8}>

            <Heading size='xl' px={{ sm: '0', md: '0' }}>
                {date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2 / $3 / $1")}
            </Heading>
            <Flex bg='white' px={6} pb={4} mt={4} shadow='sm' rounded='lg' overflow='hidden' direction='column'>
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

                    <Button ml={4} variantColor="teal">
                        <Link
                            to={`/day/${date}/edit`}
                            css={{
                                '&:hover':
                                {
                                    textDecoration: 'none',
                                    color: 'white'
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
                        <AlertDialogContent rounded='lg'>
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
                                <Button variantColor="red" onClick={handleDelete} ml={3}>
                                    Delete
                            </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </Box>
            </Flex>
        </Box >
    )
}

export default connect(null, { deleteHealth })(FoundDay);