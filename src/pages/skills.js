import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    return (
      <article className="content skills gray-bg" id="chapterskills">
        <div className="inner">
          <h2>Skills</h2>
          <div className="title-divider"></div>
          <h3>Just My Awesome Skills</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.</p>
          <div className="skills-con">
            <div className="container-sub margin-top50">
              <div className="row">
                <div className="col-6 margin-bottom50">
                  <div className="col-6"><span className="chart" data-percent="90"><span className="percent"></span> </span></div>
                  <div className="col-6 chart-text">
                    <h4>Javascript</h4>
                    <p>Expert</p>
                  </div>
                </div>
                <div className="col-6 margin-bottom50">
                  <div className="col-6"><span className="chart" data-percent="80"><span className="percent"></span> </span></div>
                  <div className="col-6 chart-text">
                    <h4>HTML5 + CSS3</h4>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="col-6"><span className="chart" data-percent="95"><span className="percent"></span> </span></div>
                  <div className="col-6 chart-text">
                    <h4>React + Redux</h4>
                    <p>Expert</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="col-6"><span className="chart" data-percent="85"><span className="percent"></span> </span></div>
                  <div className="col-6 chart-text">
                    <h4>Node + Express</h4>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="full-divider"></div>
            <div className="container-sub skill-list">
              <div className="row">
                <h3>Knowledge</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.</p>
                <div className="col-3 margin-top10">
                  <h5>Frameworks</h5>
                  <ul>
                    <li>React & Redux</li>
                    <li>React-Native</li>
                    <li>Node & Express</li>
                    <li>Angular</li>
                    <li>Backbone</li>
                  </ul>
                </div>
                <div className="col-3 margin-top10">
                	<h5>Tools</h5>
                  <ul>
                    <li>Git & Github</li>
                    <li>TDD</li>
                    <li>Exponent</li>
                    <li>RESTful / APIs</li>
                    <li>socket.io</li>
                  </ul>
                </div>
                <div className="col-3 margin-top10">
                	<h5>Databases</h5>
                  <ul>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>SQLite</li>
                    <li>Redis</li>
                  </ul>
                </div>
                <div className="col-3 margin-top10">
                	<h5>Deployment</h5>
                  <ul>
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>Heroku</li>
                    <li>DigitalOcean</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="full-divider"></div>
            <div className="container-sub">
              <div className="row">
                <h3>Language Skills</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.</p>
                <div className="progressbar-main margin-top50">
                  <div className="progress-bar-description">English Experienced</div>
                  <div id="progressBar" className="progress">
                    <div className="progress-value"></div>
                  </div>
                </div>
                <div className="progressbar-main margin-top40">
                  <div className="progress-bar-description">French Advanced</div>
                  <div id="progressBar2" className="progress">
                    <div className="progress-value"></div>
                  </div>
                </div>
                <div className="progressbar-main margin-top40">
                  <div className="progress-bar-description">German Basic</div>
                  <div id="progressBar3" className="progress">
                    <div className="progress-value"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
};