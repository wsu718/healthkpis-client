import React from 'react';
import { useAuth0 } from "../react-auth0-spa";
import Logo from '../assets/shapes-100.png';
import { Button, Image, Heading, Text, Box, Flex } from '@chakra-ui/core';

const LandingPage = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <Box bg="white" minH='100vh'
        >
            <Flex justifyContent='space-between' py={5} bg="white" color="gray.800" mx={{ xs: 8, md: 40 }}>
                <Image src={Logo} size="40px" alt='HeathKPIs' />
                <Button onClick={() => loginWithRedirect({})}>Log in</Button>
            </Flex>

            <Flex direction='column' alignItems='center' mt={10} mx={{ xs: 8, md: 40 }}>
                <Heading fontSize='4rem' letterSpacing='-.025em' color='#5850ec' textAlign='center'>
                    Improve your health
                  <br />
                    <Box as="span" color='gray.700'>through data</Box>
                </Heading>

                <Text color='gray.500' fontSize='1.25rem' mt={8} textAlign='center' >
                    Track your most important health data every day. Create weekly experiments and compare the results.
                </Text>

                <Button mt={10} size='md' onClick={() => loginWithRedirect({})} className="primary-button">Get started</Button>
            </Flex>
        </Box >
    )
}

export default LandingPage;