import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Landing from './landingpage'
import About from './about'
import Music from './music'

function Main() {
    return (
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route exact path="/music" component={Music} />
            </Switch>
        );
    }
    
export default Main;