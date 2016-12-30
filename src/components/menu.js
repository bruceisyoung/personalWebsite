import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
  		<div className='jspPane'>
				<a href='#chapterhome'><span id='link_home'>Home</span></a>
				<a href='#chapterportfolio'><span id='link_portfolio'>Portfolio</span></a>
        <a href='#chapterskills'><span id='link_skills'>Skills</span></a>
				<a href='#chapterprojects'><span id='link_projects'>Projects</span></a>
				<a href='#chapterexperience'><span id='link_experience'>Experience</span></a>
        <a href='#chaptereducation'><span id='link_education'>Education</span></a>
				<a href='#chaptertravelfood'><span id='link_travelfood'>Travel & Food</span></a>
				<a href='#chaptercontact'><span id='link_contact'>Contact</span></a>
  		</div>
    );
  }
}