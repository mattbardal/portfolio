import React from 'react';
import { Box, Flex, Center } from '@chakra-ui/react';

const Header = () => (
  <Box>
    <Box
      bgGradient="linear-gradient(90deg, rgba(155,248,244,1) 0%, rgba(111,123,247,1) 100%)"
      height="4px"
      width="100%"></Box>
    <Flex mx="auto" maxW="7xl" px={{ base: '4' }}>
      <Center
        p="4"
        fontSize="46px"
        fontWeight="300"
        _hover={{
          cursor: 'default',
          background: 'linear-gradient(90deg, rgba(155,248,244,1) 0%, rgba(111,123,247,1) 100%);',
          backgroundClip: 'text',
          textFillColor: 'transparent'
        }}>
        [mb]
      </Center>
    </Flex>
  </Box>
);

export default Header;
