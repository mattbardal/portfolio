import React from 'react';
import { Flex, Box } from '@chakra-ui/layout';

import About from '../about/About';
import Projects from '../projects/Projects';

const Home = () => {
  return (
    <Flex flexDirection={'column'} marginTop="25" mx="auto" maxW="7xl" px={{ base: '4' }}>
      <About />
      <Box marginTop="40px" />
      <Projects />
    </Flex>
  );
};

export default Home;
