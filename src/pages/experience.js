import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return (
      <article class="content experience gray-bg" id="chapterexperience">
        <div class="inner">
          <h2>Experience</h2>
          <div class="title-divider"></div>
          <h3>1 Years as Full-Stack Software Engineer </h3>
          <h3> 5 Years Experience as an enginner!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.</p>
          <div class="experience-con">
            <div class="container-sub">
              <div class="full-divider"></div>
              <div class="row">
                <div class="experience-details">
                  <div class="col-6 margin-bottom50 margin-top50">
                    <div class="col-3 icon-block"><i class="fa fa-send-o"></i></div>
                    <div class="flot-left">
                      <h5>Panara Media</h5>
                      <h4>Art Director</h4>
                      <span>2014 - 2013</span> </div>
                  </div>
                  <div class="col-6 margin-bottom50 margin-top50 no-margin-top"> Phasellus nec gravida purus. Aliquam ac enim vel ipsum consectetur vulputate. Duis quis feugiat neque. Pellentesque eleifend, nisi vel mattis vestibulum, est lacus pretium quam. </div>
                </div>
                <div class="full-divider"></div>
                <div class="experience-details">
                  <div class="col-6 margin-bottom50 margin-top50">
                    <div class="col-3 icon-block"><i class="fa fa-briefcase"></i></div>
                    <div class="flot-left">
                      <h5>Ace Advertising</h5>
                      <h4>Project Manager</h4>
                      <span>2013 - 2011</span> </div>
                  </div>
                  <div class="col-6 margin-bottom50 margin-top50 no-margin-top"> Phasellus nec gravida purus. Aliquam ac enim vel ipsum consectetur vulputate. Duis quis feugiat neque. Pellentesque eleifend, nisi vel mattis vestibulum, est lacus pretium quam. </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
};