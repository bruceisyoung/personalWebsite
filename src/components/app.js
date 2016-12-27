import React, { Component } from 'react';
import { browserHistory } from 'react-router';
// import Home from '../pages/home';
// import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
// import { directToMainPage } from '../actions/index';
// import { bindActionCreators } from 'redux';

          // {this.props.children && React.cloneElement(this.props.children, {
          //   // this is where to pass props to all children components
          //   redirect: this.redirect,
          // })}

export default class App extends Component {
	redirect(pageTo) {
	  browserHistory.push('/' + pageTo);
	}

  render() {
    return (
      <div>
      	<div >
      		<p>Sheng Yang</p>
      		<div id='nav'>
      			<ul>
      				<li><a>Home</a></li>
      				<li><a>Portfolio</a></li>
      				<li><a>Projects</a></li>
      				<li><a>Experience</a></li>
      				<li><a>Travel & Food</a></li>
      				<li><a>Contact</a></li>
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