import React, { Component } from 'react';

import Menu from './menu';

import Home from '../pages/home'
import Portfolio from '../pages/portfolio';
import Skills from '../pages/skills';
import Projects from '../pages/projects';
import Education from '../pages/education';
import Contact from '../pages/contact';
import End from '../pages/end';


const pages = ['home', 'portfolio', 'skills', 'projects', 'experience', 'education', 'travelfood', 'contact'];

export default class App extends Component {
  render() {
    return (
      <div id='container' className='container'>
        {/* navigation menu on the left */}
      	<aside id='menu' className='menu'>
          <div className='logo'>
            <img src='./src/images/logo.png' width='140' height='140' alt/>
            <span>Sheng Yang</span>
          </div>
          {/* mobile navigation */}
      		<a href='#menu1' className='menu-link'></a>
          {/* left navigation */}
      		<nav id='menu1' role='navigation'>
            <a href='#chapterhome'><span id='link_home'>Home</span></a>
            <a href='#chapterportfolio'><span id='link_portfolio'>Portfolio</span></a>
            <a href='#chapterskills'><span id='link_skills'>Skills</span></a>
            <a href='#chapterprojects'><span id='link_projects'>Projects</span></a>
            <a href='#chapterexperience'><span id='link_experience'>Experience</span></a>
            <a href='#chaptereducation'><span id='link_education'>Education</span></a>
            <a href='#chaptertravelfood'><span id='link_travelfood'>Travel & Food</span></a>
            <a href='#chaptercontact'><span id='link_contact'>Contact</span></a>
      		</nav>
      	</aside>
      	<div className='content-scroller'>
          <div className='content-wrapper'>
            <Home />
            <Portfolio />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <End />
          </div>
      	</div>
      </div>
    );
  }
}