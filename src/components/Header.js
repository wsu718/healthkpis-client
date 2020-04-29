import React from "react";
import { Box, Heading, Flex, Text, Button, Image } from "@chakra-ui/core";
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "../react-auth0-spa";
import Logo from '../assets/shapes-100.png';

const MenuItems = ({ children }) => (
    <Text mt={{ base: 4, md: 0 }} mr={12} fontSize="md" display="block" >
        {children}
    </Text>
);

const Header = props => {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg="white"
            color="gray.800"
            maxW="72rem"
            mx="auto"
            px="8"
            align="bottom"
            {...props}
        >
            <Flex align="center" mr={5}>
                <Image src={Logo} size="40px" mr={10} alt='HeathKPIs' />
            </Flex>

            <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
                <Text fontSize="lg">
                    Menu
                </Text>
            </Box>

            <Flex
                display={{ sm: show ? "block" : "none", md: "flex" }}
                width={{ sm: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
                color="gray.800"
                align="bottom"
            >

                <MenuItems><NavLink to="/data" >Days</NavLink></MenuItems>
                <MenuItems><NavLink to="/weeks">Weeks</NavLink></MenuItems>
                <MenuItems><NavLink to="/addday">Add Day</NavLink></MenuItems>
            </Flex>

            <Box
                display={{ sm: show ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <Button bg="gray.100" onClick={() => logout()}>Log out        </Button>
            </Box>
        </Flex>
    );
};

export default Header;