import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    return (
      <article className="content skills gray-bg" id="chapterskills">
        <div className="inner">
          <h2>Skills</h2>
          <div className="title-divider"></div>
          <h3>Just My Awesome Skills</h3>
          <p>Hi. Everybody. This is Sheng(Bruce) Yang. I am a well-trained Front End / Fullstack Software engineer with extensive experience in designing and developing mobile/web applications. Among my awesome skills are: focused problem-solving, extensive interpersonal communication, vigorous attention to detail, voratious appetite for learning, strong interest in pushing the envelope and a hearty desire to share knowledge with others.</p>
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
                <p>I love working as a full-stack engineer as it grants me the chance to have a truly hands-on experience with every aspect of application development and in the formation of a comprehensive understanding of software optimizaiton. Buiding apps which are modulized, testable, relibable, portable and scalable is my passion. This passion encourages me to do more and to learn more. </p>
                <p>During past application development experience, I gained solid knowledge of frameworks and front end technologies (such as webpack, bootstrap, jQuery). I also developed a deeper understanding of algorithms, design patterns, OO programming and componentization approaches. I have experiences with cross-browser, cross-platform, and design constraints. All these components bring numerous benefits as a software developer.</p>
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
                <p>As a native Chinese speaker, living in US for the last six years, my language abilities have enabled me to work and thrive in both English and Chinese working environments. I have always had a huge passion for learning new languages as I find the diversity of this world so fascinating. I think learning different languages can be the tool to explore new life possibilities. I plan to add study Spanish and Japanese in the future to add to my life of languages.
</p>
                <div className="progressbar-main margin-top50">
                  <div className="progress-bar-description">English Proficient</div>
                  <div id="progressBar" className="progress">
                    <div className="progress-value"></div>
                  </div>
                </div>
                <div className="progressbar-main margin-top40">
                  <div className="progress-bar-description">Mandarin Native Speaker</div>
                  <div id="progressBar2" className="progress">
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