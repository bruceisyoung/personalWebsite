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
          This is me, Sheng (Bruce) Yang. I love working as a Front-End/Full-Stack software engineer. I am and will continuously be 
          looking to perfect to skills for fun and my career. Feel free to reach out to me for job opportunities or just say hi or 
          want to discuss about full-stack technologies(spoiler alert: React/Redux is currently my favorite). <br />
          Also I love travel and food a lot. If you are interested in my travel plan in 2017 and have something fun to suggest, please 
          friend me! And if you just want to find someone to have meals together around San Francisco, I am always open to dinner out 
          and have a drink. Ordering a lot of food and share them with friends is another passion of mine. <br />
          I am a proud moderate democratic supporter, shoot me a message if you want to find someone to talk about politics. 
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
                    <h3>I'm also on Social Networks</h3>
                    Find me on linkedin, github, stack-overflow and facebook. Feel free to reach out to me for potenital job opportunities or friend me or stalk me.
                    <div className="contact-social margin-top30">
                      <a href="https://linkedin.com/in/bruceisyoung" target="_blank"><i className="fa fa-linkedin-square"></i></a> 
                      <a href="https://github.com/bruceisyoung" target="_blank"><i className="fa fa-github"></i></a>
                      <a href="https://linkedin.com/in/bruceisyoung" target="_blank"><i className="fa fa-stack-overflow"></i></a>
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