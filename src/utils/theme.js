import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Comfortaa'
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.500', // could be 400
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      // styles for the `a`
      a: {
        color: 'white',
        _hover: {
          color: 'gray.700'
        }
      }
    }
  }
});

export default theme;
