import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, Spacer, Center } from "@chakra-ui/react";
import './Navigation.css'

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        const nav_icon = document.getElementById("nav-icon3");

        if(this.state.open === true) {
            this.setState({open: false});
            nav_icon.classList.remove('open');
        } else {
            this.setState({open: true});
            nav_icon.classList.add('open');
        }
    }
    render() {
        return(
            <Flex marginTop="25" mx="auto" maxW="7xl" px={{ base: '4' }}>
                <Center p="4" fontSize="46px" fontWeight="300">
                    <NavLink to="/" id="navlink-nav-center">[mb]</NavLink>
                </Center>
                <Spacer />
                {/* <Center p="4" fontSize="18px" fontWeight="400"><NavLink to="/about">About Me</NavLink></Center>
                <Center p="4" fontSize="18px" fontWeight="400"><NavLink to="/projects">Projects</NavLink></Center>
                <Center p="4" fontSize="18px" fontWeight="400"><NavLink to="/resume">Resume</NavLink></Center> */}
                <MenuLinks open={this.state.open} />
                <Center px={{ base: '4', md: '8' }} display={{ base: "flex", md: "none" }} onClick={this.handleClick}>
                    <MenuIcon open={this.state.open}/>
                </Center>
            </Flex> 
        );
    }
}

const MenuIcon = () => (
    <div id="nav-icon3" className="span-icon">
        <span class="span-icon"></span>
        <span class="span-icon"></span>
        <span class="span-icon"></span>
        <span class="span-icon"></span>
    </div>
);

const MenuLinks = ({ open }) => {
    return (
        <Center
            display={{ base: open ? "block" : "none", md: "flex" }}
            flexBasis={{ base: "100%", md: "auto" }}>
            <Center p="4" fontSize="18px" fontWeight="400"><NavLink to="/about">About Me</NavLink></Center>
            <Center p="4" fontSize="18px" fontWeight="400"><NavLink to="/projects">Projects</NavLink></Center>
            <Center p="4" fontSize="18px" fontWeight="400"><NavLink to="/resume">Resume</NavLink></Center>
        </Center>
    );
}

export default Navigation;