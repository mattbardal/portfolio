import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css"
import './fonts.css';

import Navigation from './components/Navigation';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Resume from './pages/resume/Resume';
import Contact from './pages/contact/Contact';
// TODO --> 
// Work on pages
// finish terminal
// help bar 
// fix index.html
class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <BrowserRouter>
                        <div>
                          <Navigation />
                            <Switch>
                                <Route path="/" component={Home} exact/>
                                <Route path="/about" component={About}/>
                                <Route path="/projects" component={Projects}/>
                                <Route path="/resume" component={Resume}/>
                                <Route path="/contact" component={Contact}/>
                           </Switch>
                        </div> 
                    </BrowserRouter>
                </header>
                <footer id="footer">
                    &copy; 2021 Matt Bardal
                </footer>
            </div>
        );
    }
}

export default App;