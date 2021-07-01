import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import '../../fonts.css';

class TerminalApp extends Component {
  showMsg = () => 'Hello World'

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh"
        }}
      >
        <Terminal
          color='#FFFFFF'
          backgroundColor='#300A24'
          barColor='#43423D'
          style={{fontSize: "1em", fontFamily: "Ubuntu Mono"}}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          prompt='#FFFFFF'
          promptSymbol="guest@mb:~$"
          allowTabs={false}
          actionHandlers={{handleClose: () => {} }}
          msg="Hey there — welcome to my interactive terminal-like portfolio. Type 'help' to see the commands!"
        />
      </div>
    );
  }
}

export default TerminalApp;