import React, { Component } from 'react';
// today's dinner choice with oliver: 
//https://www.yelp.com/biz/hong-kong-east-ocean-seafood-restaurant-emeryville
//https://www.yelp.com/biz/saigon-seafood-harbor-restaurant-richmond-3

//http://www.wikihow.com/Record-Screen-in-Microsoft-Windows-7
//http://iopscience.iop.org/article/10.1088/0960-1317/23/9/095025/meta
//http://ieeexplore.ieee.org/document/6467957/
//https://www.google.com/search?tbm=pts&hl=en&q=%E6%9D%A8%E7%9B%9B+%E6%9B%BE%E7%A5%A5%E5%AE%87
//http://patent.ipexl.com/CN/cn201110001653.8.html
//http://patent.ipexl.com/CN/cn201010610808.3.html
//http://124.133.52.167/KCMS/detail/detail.aspx?filename=MINI201002025&dbcode=CJFD&dbname=CJFD2010
export default class Education extends Component {
  render() {
    return (
			<article className='content education white-bg' id='chaptereducation'>
				<div className='inner'>
					<h2>Education</h2>
					<div className="title-divider"></div>
					<h3>Just My Education</h3>
					<p>say something!!!!!!@#$%^&*()(*&^%$#$%^&*(say something!!!!!!@#$%^&*()(*&^%$#$%^&*(say something!!!!!!@#$%^&*()(*&^%$#$%^&*(say something!!!!!!@#$%^&*()(*&^%$#$%^&*(say something!!!!!!@#$%^&*()(*&^%$#$%^&*(say something!!!!!!@#$%^&*()(*&^%$#$%^&*(say something!!!!!!@#$%^&*()(*&^%$#$%^&*(</p>
					<div className="education-con">
            <div className="container-sub">
              <div className="full-divider"></div>
              <div className="row">
                <div className="education-details">
                  <div className="col-6 margin-bottom50 margin-top50">
                    <div className="col-3 icon-block"><a href='http://hackreactor.com'><i className="fa fa-laptop"></i></a></div>
                    <div className="flot-left">
                      <h4>Hack Reactor</h4>
                      <h5>immersive fullstack development program</h5>
                      <span>San Francisco, CA</span> <br />
                      <span>2016</span> </div>
                  </div>
                  <div className="col-6 margin-bottom50 margin-top50 no-margin-top"> 
                    Phasellus nec gravida purus. Aliquam ac enim vel ipsum consectetur vulputate. Duis quis feugiat neque. Pellentesque eleifend, nisi vel mattis vestibulum, est lacus pretium quam. 
                    <ul>
                      <li>MadSweepers<a href="https://github.com/bruceisyoung/thesis">   [github link]</a></li>
                      <li>Jamz<a href="https://github.com/bruceisyoung/todaysjam">   [github link]</a></li>
                      <li>Meal.Next<a href="https://github.com/bruceisyoung/legacy">   [github link]</a></li>
                    </ul>
                  </div>
                </div>
                <div className="full-divider"></div>
                <div className="education-details">
                  <div className="col-6 margin-bottom50 margin-top50">
                    <div className="col-3 icon-block"><a href='http://fudan.edu.cn'><i className="fa fa-graduation-cap"></i></a></div>
                    <div className="flot-left">
                      <h4>Fudan University</h4>
                      <h5>Micro-Electronics</h5>
                      <h5>M.S.</h5>
                      <span>Shanghai, China</span><br />
                      <span>2008 - 2011</span>
                    </div>
                  </div>
                  <div className="col-6 margin-bottom50 margin-top50 no-margin-top"> 
                    GPA: 3.80, top3 student<br />
                    Awarded with People’s Scholarship three times<br />
                    conducted research on digital microfluidic devices. 
                    Published several papers in creditedacademic journals and international conferences 
                    and filed two patents in China:
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="full-divider"></div>
                <div className="education-details">
                  <div className="col-6 margin-bottom50 margin-top50">
                    <div className="col-3 icon-block"><a href='http://nctu.edu.tw'><i className="fa fa-paper-plane"></i></a></div>
                    <div className="flot-left">
                      <h4>National Chiao-Tung University</h4>
                      <h5>Nanotechnology</h5>
                      <h5>Exchange Student</h5>
                      <span>Hsinchu, Taiwan</span><br />
                      <span>2010 - 2011</span>
                    </div>
                  </div>
                  <div className="col-6 margin-bottom50 margin-top50 no-margin-top"> 
                    Utilized NI vision development module and LabView programming to measure the 
                    droplets moving speed by analyzing the experiment <br />
                    [software demo video link]
                  </div>
                </div>
                <div className="full-divider"></div>
                <div className="education-details">
                  <div className="col-6 margin-bottom50 margin-top50">
                    <div className="col-3 icon-block"><a href='http://fudan.edu.cn'><i className="fa fa-graduation-cap"></i></a></div>
                    <div className="flot-left">
                      <h4>Fudan University</h4>
                      <h5>Micro-Electronics</h5>
                      <h5>B.S.</h5>
                      <span>Shanghai, China</span><br />
                      <span>2004 - 2005</span>
                    </div>
                  </div>
                  <div className="col-6 margin-bottom50 margin-top50 no-margin-top"> 
                    Awarded with People’s Scholarship three times
                    Related course: 
                    <ul>
                      <li>Computer Architecture</li>
                      <li>Principle of Microcontroller</li>
                      <li>Digital Logic</li>
                      <li>Probability theory</li>
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