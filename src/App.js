import React, { Component } from 'react';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import './utils/fonts.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <Home />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
