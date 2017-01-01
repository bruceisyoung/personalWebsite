import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <article className='content about gray-bg' id='chapterprojects'>
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
                <a href='#' className='button'>Download resume as PDF format</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
};