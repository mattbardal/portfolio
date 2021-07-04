import React from 'react';
import TerminalApp from './Terminal';
import { Center } from '@chakra-ui/layout';

const Home = () => {
    return (
        <div style={{minHeight: 'calc(100vh - 205px)'}}>
            <TerminalApp />
            <Center mt="15" p='4' fontSize="1.25em" textAlign="center">You can use the terminal to get around the page or use the navigation bar at the top!</Center>
        </div>
    );
}

export default Home;