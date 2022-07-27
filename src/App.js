import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import './utils/fonts.css';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </div>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
