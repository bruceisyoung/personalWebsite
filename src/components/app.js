import React, { Component } from 'react';

import Menu from './menu';

const pages = ['home', 'portfolio', 'skills', 'projects', 'experience', 'education', 'travelfood', 'contact'];

export default class App extends Component {
  render() {
    return (
      <div id='container' className='container'>
      	<aside id='menu' className='menu'>
          <div className='logo'>
            <img width='140' height='140' alt/>
            <span>Sheng Yang</span>
          </div>
      		<a href='#menu1' className='menu-link'></a>
      		<nav id='menu1' role='navigation' className='jspScrollable' tabIndex='0'>
      			<div id='menuContainer'  className='jspContainer'>
              <Menu />
	      			<div className='VerticalBar'></div>
	      		</div>
      		</nav>
      	</aside>
      	<div id='canvas'>
      	</div>
      </div>
    );
  }
}