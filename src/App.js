import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home.js';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Error from './components/Error';
import projects from './components/pages/Projects';
import Photography from './components/pages/Photography';
import Header from './components/Header';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Header />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/ramseyvdm" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/about" component={About}/>
             <Route path="/projects" component={projects}/>
             <Route path="/Photography" component={Photography}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;