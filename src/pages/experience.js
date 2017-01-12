import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return (
      <article className="content experience gray-bg" id="chapterexperience">
        <div className="inner">
          <h2>Experience</h2>
          <div className="title-divider"></div>
          <h3>1 Year as Full-Stack Software Engineer </h3>
          <p>While working as a bio-electronic engineer I tinkered with side projects in software 
          engineering. Through exploring this avenue as a potential career for myself, I decided to 
          join Hack Reactor in order to gain more knowledge in modern full-stack 
          software design technologies. Now with this experience and having created new 
          applications with other passionate software engineers, I feel that I have finally found 
          my true calling!
          </p>
          <h3>5 Years Experience as an Enginner!</h3>
          <p>I got my bachelors and masters degree in Micro-Electronics from <a href='http://www.fudan.edu.cn'>Fudan University</a>. 
          I am a well-trained engineer with extensive experience. Through this, I have developed a deep attention to detail, problem-solving skills, logical thinking, and a strong analytical aptitude. 
          Working in groups, I excel at being a team player with successful communication techniques.
          </p>
          <div className="experience-con">
            <div className="container-sub">
              <div className="full-divider"></div>
              <div className="row">
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
                  I conducted cutting-edge research on wearable technologies, including a unique algorithm 
                  design and modeling of caloric expenditure and non-invasive glucose sensing. <br />
                  I have hands-on experience on MEMS senser design, simulation and fabrication, products 
                  prototyping and testing. I have implemented auto-testing of photodiodes and data extraction 
                  by enabling the communication between parameter analyzer HP4145 and PC using LabView 
                  programming. <br />
                  I have also published several papers on IEEE and SPIE conferences:
                  <ul>
                    <li>
                      Algorithm to calculate human calorie expenditure based on a predicted heat strain model, 
                      BHI IEEE-EMBS, 2016.02.24<br />
                      <a href='http://ieeexplore.ieee.org/document/7455955/'>[Article Link]   </a>
                      <a href=''>[Video Link]</a>
                    </li>
                    <li>
                      Single chip AWG-based Raman spectroscopy for continuous glucose monitoring, SPIE BioS, 
                      2016.03.04<br />
                      <a href='http://spie.org/Publications/Proceedings/Paper/10.1117/12.2213556'>[Article Link]</a>
                    </li>
                    <li>
                      Self-emission glucose monitoring system with single chip guided-mode resonance filters, SPIE BioS, 
                      2016.03.04<br />
                      <a href='http://spie.org/Publications/Proceedings/Paper/10.1117/12.2213663'>[Article Link]</a>
                    </li>
                    <li>
                      Noninvasive Glucose Monitoring by Mid-infrared Self-emission Method, BIODEVICES, 
                      2014<br />
                      <a href='http://www.scitepress.org/DigitalLibrary/PublicationsDetail.aspx?ID=u46u0bCbI3s=&t=1'>[Article Link]</a>
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