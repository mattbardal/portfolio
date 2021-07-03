import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer'

import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Resume from './pages/resume/Resume';

// TODO --> 
// 2021-07-03/04 ---------------------
// Work on projects and resume
// fix index.html
// -----------------------------------

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                      <Navigation />
                        <Switch>
                            <Route path="/" component={Home} exact/>
                            <Route path="/about" component={About}/>
                            <Route path="/projects" component={Projects}/>
                            <Route path="/resume" component={Resume}/>
                       </Switch>
                    </div> 
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

export default App;