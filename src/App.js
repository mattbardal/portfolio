import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

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
                <HashRouter>
                    <div>
                      <Navigation />
                        <Switch>
                            <Route path="/" component={Home} exact/>
                            <Route path="/about" component={About}/>
                            <Route path="/projects" component={Projects}/>
                            <Route path="/resume" component={Resume}/>
                       </Switch>
                    </div> 
                </HashRouter>
                <Footer />
            </div>
        );
    }
}

export default App;