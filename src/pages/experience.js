import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return (
      <article className="content experience gray-bg" id="chapterexperience">
        <div className="inner">
          <h2>Experience</h2>
          <div className="title-divider"></div>
          <h3>1 Years as Full-Stack Software Engineer </h3>
          <p>I found my interest and passion in programming in routine jobs as a bio-electronic engineer and started
          side projects to explore possibilites for my career. Then I joined Hack Reactor to learn the most fantastic
          and modern full-stack software design technologies and make some awesome applications with other passionate
          software engineers. I am loving this life!!!
          </p>
          <h3> 5 Years Experience as an enginner!</h3>
          <p>Got my bachelar and master degree of Micro-Electronics from <a href='http://www.fudan.edu.cn'>Fudan University</a>. 
          I am a well-trained engineer with extensive experience 
          Possesses a Strong Analytical Aptitude
          Shows an Attention to Detail
          Has Excellent Communication Skills
          Is a Team Player
          problem-solving skills and logic thinking</p>
          <div className="experience-con">
            <div className="container-sub">
              <div className="full-divider"></div>
              <div className="row">
                <div className="experience-details">
                  <div className="col-6 margin-bottom50 margin-top50">
                    <div className="col-3 icon-block"><i className="fa fa-send-o"></i></div>
                    <div className="flot-left">
                      <h5>Hack Reactor</h5>
                      <h4>Full-Stack</h4>
                      <h4>Software</h4>
                      <h4>Engineer</h4>
                      <span>2016 - now</span> </div>
                  </div>
                  <div className="col-6 margin-bottom50 margin-top50 no-margin-top"> 
                  Phasellus nec gravida purus. Aliquam ac enim vel ipsum consectetur vulputate. Duis quis feugiat neque. Pellentesque eleifend, nisi vel mattis vestibulum, est lacus pretium quam. 
                  </div>
                </div>
                <div className="full-divider"></div>
                <div className="experience-details">
                  <div className="col-6 margin-bottom50 margin-top50">
                    <div className="col-3 icon-block"><i className="fa fa-briefcase"></i></div>
                    <div className="flot-left">
                      <h5>International</h5>
                      <h5>Technological</h5>
                      <h5>University</h5>
                      <h4>Bio-Electronic</h4>
                      <h4>Engineer</h4>
                      <span>2012 - 2016</span> </div>
                  </div>
                  <div className="col-6 margin-bottom50 margin-top50 no-margin-top"> 
                  Conducted cutting-edge research on wearable technologies, including algorithm design and modeling of calories expenditure and non-invasive glucose sensing
                  Hands-on experience on MEMS senser design, simulation and fabrication, products typing and testing, 
                  Implemented auto-testing of photodiodes and data extraction by enabling the communication between parameter analyzer HP4145 and PC using LabView programming
                  Published Several Papers on IEEE and SPIE conferences:
                  <ul>
                    <li>
                      <span>Algorithm to calculate human calorie expenditure based on a predicted heat strain model</span>
                      <span>BHI, IEEE-EMBS</span>
                      <span>2016.02.24</span><br />
                      <a href='http://ieeexplore.ieee.org/document/7455955/'>article</a><br />
                      <a href=''>presentation video</a>
                    </li>
                    <li>
                      <span>Single chip AWG-based Raman spectroscopy for continuous glucose monitoring</span>
                      <span>SPIE BioS</span>
                      <span>2016.03.04</span><br />
                      <a href='http://spie.org/Publications/Proceedings/Paper/10.1117/12.2213556'>article</a>
                    </li>
                    <li>
                      <span>Self-emission glucose monitoring system with single chip guided-mode resonance filters</span>
                      <span>SPIE BioS</span>
                      <span>2016.03.04</span><br />
                      <a href='http://spie.org/Publications/Proceedings/Paper/10.1117/12.2213663'>article</a>
                    </li>
                    <li>
                      <span>Noninvasive Glucose Monitoring by Mid-infrared Self-emission Method</span>
                      <span>BIODEVICES</span>
                      <span>2014</span><br />
                      <a href='http://www.scitepress.org/DigitalLibrary/PublicationsDetail.aspx?ID=u46u0bCbI3s=&t=1'>article</a>
                    </li>
                  </ul>
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