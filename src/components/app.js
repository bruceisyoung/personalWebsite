import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const pages = ['home', 'portfolio', 'skills', 'projects', 'experience', 'education', 'travelfood', 'contact'];

export default class App extends Component {
	redirect(pageTo) {
	  browserHistory.push('/' + pageTo);
	}

	pageClicked(page) {
    for(var id of pages) {
      if (id !== page.target.id) {
        $('#'+id).removeClass('active');
      } else {
        $('#'+id).addClass('active');
      }
    }
		this.redirect(page.target.id);
	}

  render() {
    return (
      <div id='container'>
      	<aside className='menu' id='menu'>
      		<p>Sheng Yang</p>
      		<nav id='menu1' className='jspScrollable'>
      			<div className='jspContainer'>
		      		<div className='jspPane'>
		    				<a onClick={this.pageClicked.bind(this)}><span id='home'>Home</span></a>
		    				<a onClick={this.pageClicked.bind(this)}><span id='portfolio'>Portfolio</span></a>
                <a onClick={this.pageClicked.bind(this)}><span id='skills'>Skills</span></a>
		    				<a onClick={this.pageClicked.bind(this)}><span id='projects'>Projects</span></a>
		    				<a onClick={this.pageClicked.bind(this)}><span id='experience'>Experience</span></a>
                <a onClick={this.pageClicked.bind(this)}><span id='education'>Education</span></a>
		    				<a onClick={this.pageClicked.bind(this)}><span id='travelfood'>Travel & Food</span></a>
		    				<a onClick={this.pageClicked.bind(this)}><span id='contact'>Contact</span></a>
		      		</div>
	      			<div className='jspVerticalBar'></div>
	      		</div>
      		</nav>
      	</aside>
      	<div id='canvas'>
      		{this.props.children && React.cloneElement(this.props.children, {
            // this is where to pass props to all children components
            redirect: this.redirect,
          })}
      	</div>
      </div>
    );
  }
}