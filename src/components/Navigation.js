import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Center } from '@chakra-ui/react';
import './Navigation.css';

const Navigation = () => (
  <Box>
    <Box
      bgGradient="linear-gradient(90deg, rgba(155,248,244,1) 0%, rgba(111,123,247,1) 100%)"
      height="4px"
      width="100%"></Box>
    <Flex mx="auto" maxW="7xl" px={{ base: '4' }}>
      <Center p="4" fontSize="46px" fontWeight="300">
        <NavLink to="/" id="navlink-nav-center">
          [mb]
        </NavLink>
      </Center>
    </Flex>
  </Box>
);

export default Navigation;
