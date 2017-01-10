import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return (
      <article className="content experience gray-bg" id="chapterexperience">
        <div className="inner">
          <h2>Experience</h2>
          <div className="title-divider"></div>
          <h3>1 Years as Full-Stack Software Engineer </h3>
          <h3> 5 Years Experience as an enginner!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.</p>
          <div className="experience-con">
            <div className="container-sub">
              <div className="full-divider"></div>
              <div className="row">
                <div className="experience-details">
                  <div className="col-6 margin-bottom50 margin-top50">
                    <div className="col-3 icon-block"><i className="fa fa-send-o"></i></div>
                    <div className="flot-left">
                      <h5>Panara Media</h5>
                      <h4>Art Director</h4>
                      <span>2014 - 2013</span> </div>
                  </div>
                  <div className="col-6 margin-bottom50 margin-top50 no-margin-top"> Phasellus nec gravida purus. Aliquam ac enim vel ipsum consectetur vulputate. Duis quis feugiat neque. Pellentesque eleifend, nisi vel mattis vestibulum, est lacus pretium quam. </div>
                </div>
                <div className="full-divider"></div>
                <div className="experience-details">
                  <div className="col-6 margin-bottom50 margin-top50">
                    <div className="col-3 icon-block"><i className="fa fa-briefcase"></i></div>
                    <div className="flot-left">
                      <h5>Ace Advertising</h5>
                      <h4>Project Manager</h4>
                      <span>2013 - 2011</span> </div>
                  </div>
                  <div className="col-6 margin-bottom50 margin-top50 no-margin-top"> Phasellus nec gravida purus. Aliquam ac enim vel ipsum consectetur vulputate. Duis quis feugiat neque. Pellentesque eleifend, nisi vel mattis vestibulum, est lacus pretium quam. </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
};