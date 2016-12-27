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
      <div>
      	<div >
      		<p>Sheng Yang</p>
      		<div id='nav'>
      			<ul>
      				<li><a onClick={this.pageClicked.bind(this)} id='home'>Home</a></li>
      				<li><a onClick={this.pageClicked.bind(this)} id='portfolio'>Portfolio</a></li>
      				<li><a onClick={this.pageClicked.bind(this)} id='projects'>Projects</a></li>
      				<li><a onClick={this.pageClicked.bind(this)} id='experience'>Experience</a></li>
      				<li><a onClick={this.pageClicked.bind(this)} id='travel&food'>Travel & Food</a></li>
      				<li><a onClick={this.pageClicked.bind(this)} id='contact'>Contact</a></li>
      			</ul>
      		</div>
      	</div>
      	<div>
      		{this.props.children && React.cloneElement(this.props.children, {
            // this is where to pass props to all children components
            redirect: this.redirect,
          })}
      	</div>
      </div>
    );
  }
}