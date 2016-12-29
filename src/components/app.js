import React, { Component } from 'react';

const pages = ['home', 'portfolio', 'skills', 'projects', 'experience', 'education', 'travelfood', 'contact'];

export default class App extends Component {
  render() {
    return (
      <div id='container'>
      	<div className='menu' id='menu'>
      		<p>Sheng Yang</p>
      		<nav>
      			<div>
		      		<div>
		    				<a href='#chapterHome'><span id='link_home'>Home</span></a>
		    				<a href='#chapterPortfolio'><span id='link_portfolio'>Portfolio</span></a>
                <a href='#chapterSkills'><span id='link_skills'>Skills</span></a>
		    				<a href='#chapterProjects'><span id='link_projects'>Projects</span></a>
		    				<a href='#chapterExperience'><span id='link_experience'>Experience</span></a>
                <a href='#chapterEducation'><span id='link_education'>Education</span></a>
		    				<a href='#chapterTravelFood'><span id='link_travelfood'>Travel & Food</span></a>
		    				<a href='#chapterContact'><span id='link_contact'>Contact</span></a>
		      		</div>
	      			<div className='VerticalBar'></div>
	      		</div>
      		</nav>
      	</div>
      	<div id='canvas'>
      	</div>
      </div>
    );
  }
}