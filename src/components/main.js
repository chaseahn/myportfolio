import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import NYG from './NYG';
import Experience from './experience';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
        <Route path="/nyg" component={NYG} />
    </Switch>
);

export default Main;
