import React from 'react';
import { Flex, Image, Box, ButtonGroup, IconButton  } from "@chakra-ui/react";
import photo from "./assets/photo.jpg"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const About = () => {
    return(
        <div>
            <AboutHeader />
            <WorkExperience />
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

const WorkExperience = () => (
    <Flex paddingTop="5" mx="auto" maxW="7xl" px={{ base: '4' }} flexDirection={{ base: 'column', lg: 'row'}} alignItems={{base: 'center'}}>
        <Box marginLeft="25" p="4">
            <Box fontSize={{base: "30px", md: "36px"}} fontWeight="700">Work Experience</Box>
            <Box backgroundColor="#2d3748">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Box>
        </Box>
    </Flex>
)

export default About;