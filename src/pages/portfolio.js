import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <h2>About Me</h2>
        <div class='title-divider'></div>
        <div class='about-con'>
        	<ul>
        		<li>Name: Sheng Yang (Bruce)</li>
        		<li>Email: <a href="mailto:isyoung.bruce@gmail.com">isyoung.bruce@gmail.com</a></li>
        		<li>Phone: (408) 627 - 9838</li>
        		<li>Address: San Francisco, CA, USA, 94109</li>
        		<li>Nationality: China (US Green Card)</li>
        	</ul>
        	<h3>Professional Profile</h3>
        	<p>Enthusiastic full-stack software engineer who has extensive knowledge and 
        	experience in test-driven development of web / mobile applications with different 
        	frameworks, including React / Redux, React Native, Angular, Node.js. Currently 
        	seeking an opportunity within an innovative company that challenges to perfect 
        	skills and support professional development.</p>
        	<a href='#' class='button'>Download resume as PDF format</a>
      	</div>
      </div>
    );
  }
};