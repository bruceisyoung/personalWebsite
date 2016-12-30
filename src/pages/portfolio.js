import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <article className='content about white-bg jspScrollable' id='chapterportfolio' tabIndex='0' 
        style={{overflow: 'hidden', padding: '0px', width: '700px', 'outline': 'none'}}>
        <div className='jspContainer'>
          <div className='jspPane'>
            <div className='inner'>
              <h2>About Me</h2>
              <div className='title-divider'></div>
              <div className='about-con'>
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
                <a href='#' className='button'>Download resume as PDF format</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
};