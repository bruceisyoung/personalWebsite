import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class App extends Component {
	redirect(pageTo) {
	  browserHistory.push('/' + pageTo);
	}

	pageClicked(page) {
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
		    				<a onClick={this.pageClicked.bind(this)} id='home'><span>Home</span></a>
		    				<a onClick={this.pageClicked.bind(this)} id='portfolio'><span>Portfolio</span></a>
		    				<a onClick={this.pageClicked.bind(this)} id='projects'><span>Projects</span></a>
		    				<a onClick={this.pageClicked.bind(this)} id='experience'><span>Experience</span></a>
		    				<a onClick={this.pageClicked.bind(this)} id='travel&food'><span>Travel & Food</span></a>
		    				<a onClick={this.pageClicked.bind(this)} id='contact'><span>Contact</span></a>
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