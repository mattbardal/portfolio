import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, Spacer, Center } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import './Navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const nav_icon = document.getElementById('nav-icon');

    if (this.state.open === true) {
      this.setState({ open: false });
      nav_icon.classList.remove('open');
    } else {
      this.setState({ open: true });
      nav_icon.classList.add('open');
    }
  }
  render() {
    return (
      <Flex marginTop="25" mx="auto" maxW="7xl" px={{ base: '4' }}>
        <Center p="4" fontSize="46px" fontWeight="300">
          <NavLink to="/" id="navlink-nav-center">
            [mb]
          </NavLink>
        </Center>
        <Spacer />
        <NavigationLinks open={this.state.open} />
        <Center
          px={{ base: '4', md: '8' }}
          display={{ base: 'flex', md: 'none' }}
          onClick={this.handleClick}>
          <NavigationIcon open={this.state.open} />
        </Center>
      </Flex>
    );
  }
}

const NavigationIcon = () => (
  <div id="nav-icon" className="span-icon">
    <span className="span-icon"></span>
    <span className="span-icon"></span>
    <span className="span-icon"></span>
    <span className="span-icon"></span>
  </div>
);

const NavigationLinks = ({ open }) => {
  return (
    <Center
      display={{ base: open ? 'block' : 'none', md: 'flex' }}
      flexBasis={{ base: '100%', md: 'auto' }}>
      <Center p="4" fontSize="18px" fontWeight="400">
        <NavLink to="/about">About Me</NavLink>
      </Center>
      <Center p="4" fontSize="18px" fontWeight="400">
        <NavLink to="/projects">Projects</NavLink>
      </Center>
      <Center p="4" fontSize="18px" fontWeight="400">
        <NavLink to="/resume">Resume</NavLink>
      </Center>
    </Center>
  );
};
NavigationLinks.propTypes = {
  open: PropTypes.bool.isRequired
};

export default Navigation;
