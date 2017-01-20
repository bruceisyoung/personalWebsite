import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
			<article className='content contact white-bg' id='chaptercontact'>
        <div className='inner'>
          <h2>Contact</h2>
          <div className='title-divider'></div>
          <h3>Let's Keep In Touch</h3>
          <p>
          This is me, Sheng (Bruce) Yang. I love my work as a Front-End/Full-Stack software engineer. I am always 
          looking to perfect my skills for fun and career advancement. Feel free to reach out to me for job opportunities,
          to discuss full-stack technology (spoiler alert: React/Redux is currently my favorite), or just to say hi.
          Other passions of mine are travel and food. You can see my travel plan for 2017 on this website. If you have suggestions for travel or 
          good food, please friend me! I love ordering lots of food and sharing with friends. 
          I am also a proud Democrat if you want to chat politics. 
          </p>
          <div className="full-divider"></div>
          <div className="contact-con margin-top50">
            <div className="container-sub">
              <div className="row">
                <div className="contact-details">
                  <div className="col-6">
                    <div className="contact-text">
                      <div className="col-2 icon-block address"><i className="fa fa-map-marker"></i></div>
                      <div className="flot-left"> 
                        <strong>Sheng Yang</strong><br />
                        Lower Nob Hill, San Francisco<br />
                        CA, 94109, United States. 
                      </div>
                    </div>
                    <div className="contact-text">
                      <div className="col-2 icon-block phone"><i className="fa fa-phone"></i></div>
                      <div className="flot-left">
                        <strong>Phone</strong><br />
                        (408)-627-9838 
                      </div>
                    </div>
                    <div className="contact-text">
                      <div className="col-2 icon-block email"><i className="fa fa-envelope"></i></div>
                      <div className="flot-left">
                        <strong>Email</strong><br />
                        <a href="mailto:isyoung.bruce@gmail.com">isyoung.bruce@gmail.com</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 m-margin-top30">
                    <h3>Social Networks</h3>
                    Find me on linkedin, github, stack-overflow and facebook. Feel free to reach out to me through any of them to keep in touch.
                    <div className="contact-social margin-top30">
                      <a href="https://linkedin.com/in/bruceisyoung" target="_blank"><i className="fa fa-linkedin-square"></i></a> 
                      <a href="https://github.com/bruceisyoung" target="_blank"><i className="fa fa-github"></i></a>
                      <a href="https://stackoverflow.com/users/6780044/bruce-isyoung" target="_blank"><i className="fa fa-stack-overflow"></i></a>
                      <a href="https://facebook.com/bruceisyoung" target="_blank"><i className="fa fa-facebook-square"></i></a> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="full-divider"></div>
            <div className="container-sub">
              <div className="row">
                <div className="contact-form">
                  <h3>Drop Me a Line</h3>
                  <form id="form1" name="form1" method="post" >
                    <input name="name" type="text" id="name" placeholder="Your Name..." />
                    <input name="email" type="text" id="email" placeholder="Your Email..." />
                    <textarea name="message" id="message" cols="45" rows="5" placeholder="Your Message..."></textarea>
                    <input type="submit" name="button" id="button" value="say hello!" />
                    <div id="successmsg" ></div>
                  </form>
                </div>
              </div>
            </div>
        </div>
			</article>
    );
  }
};