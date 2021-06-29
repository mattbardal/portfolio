import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../fonts.css';
import './Navigation.css'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        const nav_icon = document.getElementById("nav-icon3");

        if(this.state.open === true) {
            closeNav();
            this.setState({open: false});
            nav_icon.classList.remove('open');
        } else {
            openNav();
            this.setState({open: true});
            nav_icon.classList.add('open');
        }
    }

    render() {
        return(
            <div>
                <div id="mySidebar" class="sidebar">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Me</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/resume">Resume</NavLink>
                    <NavLink to="/contact">Contact Me</NavLink>
                    <div id="bottom-sidebar">
                      <a href="https://github.com/mattbardal/" target="_blank" rel="noreferrer"><img src="./static/github.png" alt="GitHub" /></a>
                      <a href="https://www.linkedin.com/in/mattbardal/" target="_blank" rel="noreferrer"><img src="./static/linkedin.png" alt="LinkedIn" /></a>
                    </div>
                </div>
                <nav>
                    <div id="nav-icon3" class="span-icon" onClick={this.handleClick}>
                        <span class="span-icon"></span>
                        <span class="span-icon"></span>
                        <span class="span-icon"></span>
                        <span class="span-icon"></span>
                    </div>
                    <NavLink to="/" id="navlink-nav-center" onClick={this.handleClick}><span id="nav-center">[mb]</span></NavLink>
                    <span id="nav-right">&#63;</span> 
                </nav>
            </div>
        );
    }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("root").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("root").style.marginLeft = "0";
}


export default Navigation;