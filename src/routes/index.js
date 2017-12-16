import React from 'react';
import { Router, Switch, Route } from 'react-static'
import Routes from 'react-static-routes'

import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';

export default ()=> (
    <Router>
        <Switch>
            <Route exact path = '/' component= {Home} />
            <Route path='/about' component={About} />
            <Route path='/work' component={Work} />
            <Route path='/contact' component={Contact} />
         </Switch>
    </Router>
);