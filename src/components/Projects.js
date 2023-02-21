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
  Center,
  Container,
  Button,
  ButtonGroup
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import '../utils/style.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

import astrosamurai_logo from '../assets/astrosamurai_logo.png';
import astro_title from '../assets/astrosamurai_title.png';
import astro_game from '../assets/astrosamurai_game.png';

import planit_logo from '../assets/planit_logo.png';
import planit_main from '../assets/planit_main.png';
import planit_calendar from '../assets/planit_calendar.png';

import ttfm_logo from '../assets/ttfm.png';

import bltnbrd_logo from '../assets/bltnbrd_logo.png';
import bltnbrd_screenshot from '../assets/bltnbrd_screenshot.png';

import ginius_gif from '../assets/ginius.gif';
import ginius_screenshot from '../assets/ginius-2.png';
import ginius_screenshot_2 from '../assets/ginius-3.png';

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
            body="Astro Samurai is a singleplayer, side-view, 2D platform survival game where you defend the galaxy from aliens as an Astronaut-samurai with a katana. AstroSamurai was created by myself and another student as part of our COMP 2659: Computing Machinery II class during the Winter 2021 semester. The goal of this project was to learn more about how software interacts with computer hardware."
            imgs={[astro_title, astro_game]}
            links={[]}
          />
          <Project
            icon={planit_logo}
            icon_alt="Planit Logo"
            time="Winter 2021 (January - April)"
            title="Planit"
            subtitle="an academic planner and course organizer"
            tags={['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Git']}
            body="Planit is a todo list, calendar, and academic/semester planner that was built by me and a couple other students at MRU using Django, a web-based python framework. This project was created for the COMP 2633: Foundations of Software Engineering class during the Winter 2021 semester.The goal of this project was to challenge ourselves to learn a new framework while also meeting the expectations of designing a project from scratch following proper software engineering principles."
            imgs={[planit_main, planit_calendar]}
            links={[]}
          />
          <Project
            icon={ttfm_logo}
            icon_alt="tt.fm+ logo"
            time="Summer 2021"
            title="tt.fm+"
            subtitle="a better way to turn tables"
            tags={['React', 'TypeScript', 'Chakra UI', 'Chrome Extension', 'Git']}
            body="tt.fm+ is a chrome web extension that provides quality of life improvements such as night mode, auto liking songs, and the use of third party emoticons within turntable.fm/. In the future, I would like to allow users to add their own custom emotes through a custom API, import playlists from Spotify, and port the extension to Firefox."
            imgs={[]}
            links={[
              {
                url: 'https://github.com/keithradford/ttfm-plus',
                value: 'GitHub',
                icon: <FaGithub />
              }
            ]}
          />
          <Project
            icon={bltnbrd_logo}
            icon_alt="bltnbrd logo"
            time="Calgary Hacks 2022"
            title="bltnbrd.online"
            subtitle="an online bulletin board"
            tags={[
              'React',
              'TypeScript',
              'Chakra UI',
              'Node',
              'Express',
              'MongoDB',
              'Auth0',
              'Google Maps API'
            ]}
            body="BltnBrd is a bulletin board web app to keep everyone connected just like the bulletin boards at your local convenience stores or community centers. Maintain a sense of community and live a healthier life. This web app was created during the Calgary Hacks 2022 hackathon with three other team members. You can learn more and see it in action from the links below."
            imgs={[bltnbrd_screenshot]}
            links={[
              {
                url: 'https://bltnbrd.netlify.app/',
                value: 'https://bltnbrd.netlify.app/',
                icon: <FiExternalLink />
              },
              {
                url: 'https://devpost.com/software/bltnbrd',
                value: 'Calgary Hacks 2022 Devpost',
                icon: <FiExternalLink />
              },
              {
                url: 'https://github.com/Sean-Jamieson/bulletinboard',
                value: 'GitHub',
                icon: <FaGithub />
              }
            ]}
          />
          <Project
            time="Calgary Hacks 2023"
            title="ginius"
            subtitle="an interactive predictive model for gini indices"
            tags={['React', 'TypeScript', 'Chakra UI', 'Flask', 'Recharts', 'Scikit-Learn']}
            body="Our goal for this hackathon was to create a single page web application that could demonstrate the value of education in society.Ginius leverages data from The World Bank data catalog, and uses two trained regression machine learning models to predict future income inequality (GINI index) based upon national educational statistics. This data is then visualized and the user is given the opportunity to explore how different factors can manipulate that prediction. This web app was created during the Calgary Hacks 2023 hackathon with four other team members. You can learn more and see it in action from the links below."
            imgs={[ginius_gif, ginius_screenshot, ginius_screenshot_2]}
            links={[
              {
                url: 'https://devpost.com/software/ginius',
                value: 'Calgary Hacks 2023 Devpost',
                icon: <FiExternalLink />
              },
              {
                url: 'https://github.com/mattbardal/ginius',
                value: 'GitHub',
                icon: <FaGithub />
              }
            ]}
          />
        </Accordion>
      </Flex>
    </div>
  );
};

const Project = ({ icon, icon_alt, time, title, subtitle, body, tags, imgs, links }) => (
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
        <Image mb="15px" width="175px" src={icon} alt={icon_alt} />
      </Center>
      <Flex alignItems={{ base: 'center' }}>
        <Box>
          {body}
          <Text paddingTop="2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="solid"
                backgroundColor="rgba(111,123,247,1)"
                borderRadius="5"
                p="1"
                mt="1"
                mr="2"
                fontSize="0.8em">
                {tag}
              </Badge>
            ))}
          </Text>
        </Box>
      </Flex>
      <ButtonGroup
        flexDirection={{ base: 'column', md: 'row' }}
        variant="unstyled"
        color="white"
        mt="25px">
        {links.map((link, index) => (
          <ProjectLinks key={index} link={link} />
        ))}
      </ButtonGroup>
      <Container maxW="800px" alignContent="center">
        <Carousel infiniteLoop>
          {imgs.map((img, index) => (
            <img key={index} src={img} mt="15" />
          ))}
        </Carousel>
      </Container>
    </AccordionPanel>
  </AccordionItem>
);
Project.propTypes = {
  icon: PropTypes.string.isRequired,
  icon_alt: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  imgs: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired
};

const ProjectLinks = ({ link }) => (
  <Button
    as="a"
    className="buttonGroup-a"
    href={link.url}
    target="_blank"
    aria-label={link.value}
    leftIcon={link.icon}
    marginInlineStart="0"
    mr={{ base: '0', md: '15px' }}>
    {link.value}
  </Button>
);

ProjectLinks.propTypes = {
  link: PropTypes.object.isRequired
};

export default Projects;
