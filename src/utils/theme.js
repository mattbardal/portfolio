import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Comfortaa'
  },
  colors: {
    bgColor: '#111'
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'bgColor',
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      // styles for the `a`
      a: {
        color: 'white',
        paddingTop: '5px',
        paddingBottom: '5px',
        paddingLeft: '12px',
        paddingRight: '12px',
        _hover: {
          color: 'rgba(111,123,247,1)'
        }
      }
    }
  }
});

export default theme;
