import React from 'react';
import { Flex, Image, Box, ButtonGroup, IconButton, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Badge,Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import photo from "./assets/photo.jpg"
import mcsnet from './assets/mcsnet.png'

const About = () => {
    return(
        <div>
            <AboutHeader />
            <Flex paddingTop="5" mx="auto" maxW="7xl" px={{ base: '4' }} flexDirection={{ base: 'column', lg: 'row'}} alignItems={{base: 'center'}}>
                <Box marginLeft="25" fontSize={{base: "28px", md: "32px"}} fontWeight="700">Work Experience</Box>
            </Flex>
            <Flex paddingTop="5" mx="auto" maxW="7xl" px={{ base: '4' }} flexDirection={{ base: 'column', lg: 'row'}}>
                <Accordion allowToggle width="100%">
                        <WorkExperience 
                            logo={mcsnet} 
                            company='MCSnet' 
                            title='Student Programmer' 
                            time="May 2021 - Present" 
                            text="At MCSnet, my job is to help improve and work on numerous projects. These projects involve re-building their invoice generation software from Perl into PHP using FPDF, building React web-apps with Google Maps integration, and learning about the SNMP internet standard protocol."
                            tags={['PHP', 'FPDF', 'React', '@react-google-maps/api', 'SQLite3', 'SNMP']} />
                </Accordion>
            </Flex>
        </div>
    );
}

const AboutHeader = () => (
    <Flex paddingTop="5" mx="auto" maxW="7xl" px={{ base: '4' }} flexDirection={{ base: 'column', lg: 'row'}} alignItems={{base: 'center'}}>
        <Box marginLeft="25" boxSize={{base: '50%', md: '40%', lg: 'full'}}>
            <Image src={photo} alt="Matthieu Bardal" borderRadius="full" border="2px solid white" />
        </Box>
        <Box marginLeft="25" p="4">
            <Box fontSize={{base: "48px", md: "52px"}} fontWeight="700">Hey, I'm Matt!</Box>
            <Box fontSize={{base: "16px", md: "18px"}} marginRight="5">
            I'm a student and developer with a passion for learning. I am currently in my third year of Computer Science studying at Mount Royal University in Calgary.
            Growing up, I've always had an interest in learning about computers and how they work as well as programming them. You can get in touch with me through email 
            (<a href="mailto:mattbardal@gmail.com" style={{color: '#2D3748', fontWeight: '700'}}>mattbardal@gmail.com</a>) or find me on the networks below.
            </Box>
            <Box>
                <ButtonGroup variant="unstyled" color="white" marginTop="5">
                    <IconButton as="a" href="mailto:mattbardal@gmail.com" target="_blank" aria-label="Email" icon={<MdEmail fontSize="28px" />} />
                    <IconButton as="a" href="https://www.linkedin.com/in/mattbardal/" target="_blank" aria-label="LinkedIn" icon={<FaLinkedin fontSize="28px" />} />
                    <IconButton as="a" href="https://github.com/mattbardal/" target="_blank" aria-label="GitHub" icon={<FaGithub fontSize="28px" />} />
                </ButtonGroup>
            </Box>
        </Box>
    </Flex>
)

const WorkExperience = ({logo, company, title, time, text, tags}) => (
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
        <Flex alignItems={{base: 'center'}}>
            <Box marginRight="15" width={{md: '50%', lg: '25%'}}>
                <Image src={logo} />
            </Box>
            <Text>
                {text}
                <Text paddingTop="2">
                {tags.map((tag) => (
                    <Badge variant="solid" backgroundColor="#C53030" borderRadius="5" p="1" mt="1" mr="2" fontSize="0.8em" >{tag}</Badge>
                ))}
                </Text>
            </Text>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
)

export default About;