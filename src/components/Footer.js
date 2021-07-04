import { Box, Flex, ButtonGroup, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Text } from '@chakra-ui/layout'

const Footer = () => (
    <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" pt="8" px={{ base: '4', md: '8' }} >
        <Flex justify="space-between">
            <Text>
                &copy; {new Date().getFullYear()} Matt Bardal
            </Text>
            <SocialMediaLinks />
        </Flex>
    </Box>
)

const SocialMediaLinks = () => (
  <ButtonGroup variant="unstyled" color="white"> 
    <IconButton as="a" href="mailto:mattbardal@gmail.com" target="_blank" aria-label="Email" icon={<MdEmail fontSize="28px" />} />
    <IconButton as="a" href="https://www.linkedin.com/in/mattbardal/" target="_blank" aria-label="LinkedIn" icon={<FaLinkedin fontSize="28px" />} />
    <IconButton as="a" href="https://github.com/mattbardal/" target="_blank" aria-label="GitHub" icon={<FaGithub fontSize="28px" />} />
  </ButtonGroup>
)

export default Footer;