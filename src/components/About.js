import React from 'react';
import {
  Flex,
  Image,
  Box,
  ButtonGroup,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  Text,
  Link
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
// import { AiFillFilePdf } from 'react-icons/ai';
import photo from '../assets/photo.jpeg';

const About = () => {
  return (
    <div>
      <AboutHeader />
      <Flex
        paddingTop="5"
        mx="auto"
        maxW="7xl"
        px={{ base: '4' }}
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems={{ base: 'center' }}>
        <Box fontSize={{ base: '28px', md: '32px' }} fontWeight="700">
          Work Experience
        </Box>
      </Flex>
      <Flex
        paddingTop="5"
        mx="auto"
        maxW="7xl"
        px={{ base: '4' }}
        flexDirection={{ base: 'column', lg: 'row' }}>
        <Accordion allowToggle width="100%">
          <WorkExperience
            company="MCSnet"
            title="Student Programmer"
            time="May 2021 - August 2021"
            text=""
            tags={['PHP', 'FPDF', 'React', '@react-google-maps/api', 'SQLite3', 'SNMP']}
          />
          <WorkExperience
            company="Shopify"
            title="Developer Intern"
            time="May 2022 - August 2022"
            text=""
            tags={['Ruby on Rails', 'Go', 'Kubernetes', 'StimulusJS', 'RSpec']}
          />
        </Accordion>
      </Flex>
    </div>
  );
};

const AboutHeader = () => (
  <Flex
    mx="auto"
    maxW="7xl"
    px={{ base: '4' }}
    flexDirection={{ base: 'column', lg: 'row' }}
    alignItems={{ base: 'center' }}>
    <Box marginLeft="25" boxSize={{ base: '50%', md: '40%', lg: 'full' }}>
      <Image src={photo} alt="Matthieu Bardal" borderRadius="full" border="2px solid white" />
    </Box>
    <Box marginLeft="25" p="4">
      <Box fontSize={{ base: '32px', md: '48px' }} fontWeight="700">
        Hi there, my name is Matthieu.
      </Box>
      <Box fontSize={{ base: '16px', md: '18px' }} marginRight="5">
        I&apos;m a student and developer with a passion for learning. I am currently in my fourth
        year pursuing a Bachelors of Science in Computer Science at Mount Royal University. I made
        this website as a way to showcase some of my projects and past experience. If you would like
        to get in touch with me, you can reach me at
        <Link as="a" href="mailto:mattbardal@gmail.com" fontWeight="700">
          mattbardal@gmail.com
        </Link>{' '}
        or find me on the networks below.
      </Box>
      <Box>
        <ButtonGroup variant="unstyled" color="white" marginTop="5">
          <IconButton
            as="a"
            href="mailto:mattbardal@gmail.com"
            target="_blank"
            aria-label="Email"
            icon={<MdEmail fontSize="28px" />}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/mattbardal/"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="28px" />}
          />
          <IconButton
            as="a"
            href="https://github.com/mattbardal/"
            target="_blank"
            aria-label="GitHub"
            icon={<FaGithub fontSize="28px" />}
          />
          {/* <IconButton
            as="a"
            href="#"
            target="_blank"
            aria-label="CV"
            icon={<AiFillFilePdf fontSize="28px" />}
          /> */}
        </ButtonGroup>
      </Box>
    </Box>
  </Flex>
);

const WorkExperience = ({ company, title, time, text, tags }) => (
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {company} - {title}
        </Box>
        <Box mr="3">{time}</Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Flex alignItems={{ base: 'center' }}>
        <Text>
          {text}
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
        </Text>
      </Flex>
    </AccordionPanel>
  </AccordionItem>
);
WorkExperience.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired
};

export default About;
