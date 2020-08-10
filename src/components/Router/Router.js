import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Landing from '../Landing/Landing'
import About from '../About/About'
import Music from '../Music/Music'

function Router() {
    return (
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route exact path="/music" component={Music} />
            </Switch>
        );
    }
    
export default Router;