import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import { Center } from '@chakra-ui/layout';
import '../../utils/fonts.css';

class TerminalApp extends Component {
  siteDetails = () =>
    'This portfolio was built using React and Chakra UI with some custom CSS added here and there.';

  render() {
    return (
      <Center
        style={{
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          maxWidth: '1200px',
          maxHeight: '650px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
        <Terminal
          color="#FFFFFF"
          backgroundColor="#300A24"
          barColor="#43423D"
          style={{ fontSize: '1em', fontFamily: 'Ubuntu Mono' }}
          commands={{
            'about-site': this.siteDetails,
            whois: () => window.location.replace('/#/about'),
            'view-projects': () => window.location.replace('/#/projects'),
            'get-resume': () => window.location.replace('/#/resume'),
            github: () => window.open('https://github.com/mattbardal/', '_blank', 'noreferrer'),
            linkedin: () =>
              window.open('https://www.linkedin.com/in/mattbardal/', '_blank', 'noreferrer')
          }}
          descriptions={{
            'about-site': 'About the website',
            whois: 'Who is Matt?',
            'view-projects': "View the projects I've built and worked on",
            'get-resume': 'Opens my resume',
            github: 'Opens my GitHub profile in a new tab',
            linkedin: 'Opens my LinkedIn profile in a new tab'
          }}
          prompt="#FFFFFF"
          promptSymbol="guest@mb:~$"
          allowTabs={false}
          actionHandlers={{ handleClose: () => {} }}
          msg="Hey there — welcome to my interactive terminal-like portfolio. Type 'help' to see the commands!"
        />
      </Center>
    );
  }
}

export default TerminalApp;
