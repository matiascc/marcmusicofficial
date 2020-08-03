import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Landing from './landingpage'
import About from './about'
import Music from './music'
import Follow from './follow'

function Main() {
    return (
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route exact path="/music" component={Music} />
                <Route exact path="/follow" component={Follow} />
            </Switch>
        );
    }
    
export default Main;