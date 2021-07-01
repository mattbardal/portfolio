import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, Spacer, Center } from "@chakra-ui/react";

import '../fonts.css';
//import './Navigation.css'

class Navigation extends Component {
    render() {
        return(
            <Flex marginTop="50">
            <Center p="4" fontSize="46px" fontWeight="300">
                <NavLink to="/" id="navlink-nav-center">[mb]</NavLink>
            </Center>
            <Spacer />

            <Center p="4" fontSize="18px" fontWeight="400"><NavLink to="/about">About Me</NavLink></Center>
            <Center p="4" fontSize="18px" fontWeight="400"><NavLink to="/projects">Projects</NavLink></Center>
            <Center p="4" fontSize="18px" fontWeight="400"><NavLink to="/resume">Resume</NavLink></Center>
            </Flex> 
        );
    }
}

export default Navigation;