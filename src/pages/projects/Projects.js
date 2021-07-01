import React from 'react';
import '../../fonts.css';
import './Projects.css'
import astrosamurai_logo from "./assets/astrosamurai_logo.png";
import planit_logo from './assets/planit_logo.png'

const Projects = () => {
    return (
       <div className="projects">
            <Project 
            img={astrosamurai_logo}
            img_alt="AstroSamurai Logo"
            title="AstroSamurai"
            subtitle="a video game built for the Atari ST"
            tags={['C', 'M68k Assembly', 'Git']}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante lorem, viverra sed vulputate sit amet, maximus sit amet elit. Duis ut metus consequat, consectetur mi nec, scelerisque dolor. "
            id={0} />
            
            <Project 
            img={planit_logo}
            img_alt="Planit Logo"
            title="Planit"
            subtitle="an academic planner and course organizer"
            tags={['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Git']}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante lorem, viverra sed vulputate sit amet, maximus sit amet elit. Duis ut metus consequat, consectetur mi nec, scelerisque dolor. "
            id={1} />
       </div>
    );
}


const Project = ({img, img_alt, title, subtitle, body, tags, button_redirect, id}) => {
    return (
        <div className="project">
            <img src={img} alt={img_alt} id="project-img" />
            <h2>{title} - {subtitle}</h2>
            <p id="body">{body}</p>
            <div className="tags">
                {tags.map((tag) => (
                    <div id="tag">{tag}</div>
                ))} 
                <button id="learn-more">Learn More -></button>
            </div>
        </div>
    );
}

export default Projects;