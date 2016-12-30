import React, { Component } from 'react';

import Menu from './menu';
import VerticalBar from './verticalBar'

import Home from '../pages/home'
import Portfolio from '../pages/portfolio';


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
      		<nav id='menu1' role='navigation' className='jspScrollable' tabIndex='0'
            style={{overflow: 'hidden', padding: '0px', width: '200px'}}>
      			<div className='jspContainer'>
              <Menu />
              <VerticalBar />
	      		</div>
      		</nav>
      	</aside>
      	<div className='content-scroller' style={{overflow: 'visible'}}>
          <div className='content-wrapper'>
            <Home />
            <Portfolio />
          </div>
      	</div>
      </div>
    );
  }
}