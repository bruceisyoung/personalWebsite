import React, { Component } from 'react';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import App from './app';
import Home from '../pages/home';
import Portfolio from '../pages/portfolio';
import Projects from '../pages/projects';
import Experience from '../pages/experience';
import TravelFood from '../pages/travel&food';
import Contact from '../pages/contact';

// basic setup of router.
const routes = (
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='home' component={ Home } />
      <Route path='portfolio' component={ Portfolio } />
      <Route path='projects' component={ Projects } />
      <Route path='experience' component={ Experience } />
      <Route path='travel&food' component={ TravelFood } />
      <Route path='contact' component={ Contact } />
    </Route>
  </Router>
);

export default routes;