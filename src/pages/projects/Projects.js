import React from 'react';
import {
  Flex,
  Image,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  Text,
  Center
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import astrosamurai_logo from './assets/astrosamurai_logo.png';
import astro_title from './assets/astrosamurai_title.png';
import astro_game from './assets/astrosamurai_game.png';

import planit_logo from './assets/planit_logo.png';
import planit_main from './assets/planit_main.png';
import planit_calendar from './assets/planit_calendar.png';

const Projects = () => {
  return (
    <div>
      <Flex
        paddingTop="5"
        mx="auto"
        maxW="7xl"
        px={{ base: '4' }}
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems={{ base: 'center' }}>
        <Box textAlign="center" fontSize={{ base: '28px', md: '32px' }} fontWeight="700">
          Projects & Contributions
        </Box>
      </Flex>
      <Flex
        paddingTop="5"
        mx="auto"
        maxW="7xl"
        px={{ base: '4' }}
        flexDirection={{ base: 'column', lg: 'row' }}>
        <Accordion allowToggle width="100%">
          <Project
            icon={astrosamurai_logo}
            icon_alt="AstroSamurai Logo"
            time="Winter 2021 (January - April)"
            title="AstroSamurai"
            subtitle="a video game built for the Atari ST"
            tags={['C', 'M68k Assembly', 'Git']}
            body="Astro Samurai is a 1-player, side-view, 2D platform survival game where you defend the galaxy from aliens as an Astronaut-samurai with a katana. AstroSamurai was created by Kaleb Chisholm and myself as part of our COMP 2659: Computing Machinery II class during the Winter 2021 semester. The goal of this project was to learn more about how software interacts with computer hardware."
            imgs={[astro_title, astro_game]}
          />
          <Project
            icon={planit_logo}
            icon_alt="Planit Logo"
            time="Winter 2021 (January - April)"
            title="Planit"
            subtitle="an academic planner and course organizer"
            tags={['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Git']}
            body="Planit is a todo list, calendar, and academic/semester planner that was built by Kaleb Chisholm, Sean Jamieson, and myself using Django, a web-based python framework. This project was created for the COMP 2633: Foundations of Software Engineering class during the Winter 2021 semester."
            imgs={[planit_main, planit_calendar]}
          />
        </Accordion>
      </Flex>
    </div>
  );
};

const Project = ({ icon, icon_alt, time, title, subtitle, body, tags, imgs }) => (
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <span style={{ fontWeight: '700' }}>{title}</span> - {subtitle}
        </Box>
        <Box mr="3">{time}</Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Center>
        <Image mb="15px" width="150px" src={icon} alt={icon_alt} />
      </Center>
      <Flex alignItems={{ base: 'center' }}>
        <Text>
          {body}
          <Text paddingTop="2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="solid"
                backgroundColor="#C53030"
                borderRadius="5"
                p="1"
                mt="1"
                mr="2"
                fontSize="0.8em">
                {tag}
              </Badge>
            ))}
          </Text>
        </Text>
      </Flex>
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        marginLeft="auto"
        marginRight="auto"
        alignItems={{ base: 'center' }}>
        <Carousel infiniteLoop width="65%">
          {imgs.map((img, index) => (
            <Image key={index} src={img} mt="15" />
          ))}
        </Carousel>
      </Flex>
    </AccordionPanel>
  </AccordionItem>
);
Project.propTypes = {
  icon: PropTypes.Image,
  icon_alt: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  imgs: PropTypes.string.isRequired
};

export default Projects;
