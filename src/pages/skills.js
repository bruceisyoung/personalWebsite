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
                  <div className="col-6"><span className="chart" data-percent="75"><span className="percent"></span> </span></div>
                  <div className="col-6 chart-text">
                    <h4>Javascript</h4>
                    <p>Expert</p>
                  </div>
                </div>
                <div className="col-6 margin-bottom50">
                  <div className="col-6"><span className="chart" data-percent="88"><span className="percent"></span> </span></div>
                  <div className="col-6 chart-text">
                    <h4>HTML5 CSS3</h4>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="col-6"><span className="chart" data-percent="90"><span className="percent"></span> </span></div>
                  <div className="col-6 chart-text">
                    <h4>React + Redux</h4>
                    <p>Expert, 8 years</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="col-6"><span className="chart" data-percent="96"><span className="percent"></span> </span></div>
                  <div className="col-6 chart-text">
                    <h4>HTML5 CSS3</h4>
                    <p>Expert, 8 years</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="full-divider"></div>
            <div className="container-sub skill-list">
              <div className="row">
                <h3>Knowledge</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.</p>
                <div className="col-4 margin-top10">
                  <ul>
                    <li>Google Analythics & SEO</li>
                    <li>Instal and Configure</li>
                    <li>E-commerce Platform</li>
                    <li>Color theory knowledge</li>
                  </ul>
                </div>
                <div className="col-4 margin-top10">
                  <ul>
                    <li>Photo manipulation skills</li>
                    <li>Digital Painting</li>
                    <li>Photo Composition</li>
                    <li>Good sense of Tipography</li>
                  </ul>
                </div>
                <div className="col-4 margin-top10">
                  <ul>
                    <li>Web Usability</li>
                    <li>Grid & Layout</li>
                    <li>Portrait Retouching</li>
                    <li>Video Editing</li>
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