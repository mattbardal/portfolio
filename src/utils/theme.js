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
          background: 'linear-gradient(90deg, rgba(155,248,244,1) 0%, rgba(111,123,247,1) 100%);',
          backgroundClip: 'text',
          textFillColor: 'transparent'
        }
      }
    }
  }
});

export default theme;
