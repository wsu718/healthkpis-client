import React from "react";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/core";
import { NavLink, Link } from 'react-router-dom';
import { useAuth0 } from "../react-auth0-spa";
import Logo from '../assets/shapes-100.png';
import styled from '@emotion/styled';

const MenuItems = ({ children }) => (
    <Text mt={{ base: 4, md: 0 }} mr={12} fontSize={{ xs: "xl", md: "md" }} display="block" >
        {children}
    </Text>
);

const StyledLink = styled(NavLink)`
  &.active {
    padding-bottom: 1.9rem;
    border-bottom-width: 2px;
    border-color: #f44336;
    color: #161e2e;
  }
  &:hover {
    text-decoration: none;
    color: #374151;
    border-color: #d2d6dc;
    border-bottom-width: 2px;
    padding-bottom: 1.9rem;
}

@media screen and (max-width: 48em) {
    &.active {
        border-bottom-width: 0px;
    }
}
`;

const Header = () => {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);

    const { logout } = useAuth0();

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            py={5}
            bg="white"
            color="gray.800"
            px={16}
            shadow='sm'
            position='relative'
        >
            <Flex align="center" mr={5}>
                <Link as={NavLink} to="/data">
                    <Image src={Logo} size="40px" mr={10} alt='HeathKPIs' />
                </Link>
            </Flex>

            <Box display={{ xs: "block", md: "none" }} onClick={handleToggle}>
                <Text fontSize="lg">
                    Menu
                </Text>
            </Box>

            <Flex
                display={{ xs: show ? "block" : "none", md: "flex" }}
                width={{ xs: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
                color="gray.500"
                align="bottom"
                fontWeight='medium'
            >

                <MenuItems>

                    <StyledLink to="/data">
                        Days
                    </StyledLink>
                </MenuItems>

                <MenuItems >
                    <StyledLink to="/weeks">
                        Weeks
                    </StyledLink>
                </MenuItems>

                <MenuItems>
                    <StyledLink to="/addday">
                        Add Day
                    </StyledLink>
                </MenuItems>
            </Flex>

            <Box
                display={{ xs: show ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <Button bg="gray.100" onClick={() => logout()}>Log out        </Button>
            </Box>
        </Flex >
    );
};

export default Header;