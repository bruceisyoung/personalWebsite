import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
			<article className='content contact white-bg' id='chaptercontact'>
        <div className='inner'>
          <h2>Contact</h2>
          <div className='title-divider'></div>
          <h3>Let's Keep In Touch</h3>
          <p>Say Something</p>
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
                        Low Nob Hill, San Francisco<br />
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor.
                    <div className="contact-social margin-top30">
                      <a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a> 
                      <a href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i></a> 
                      <a href="https://www.youtube.com" target="_blank"><i className="fa fa-youtube"></i></a>
                      <a href="https://plus.google.com" target="_blank"><i className="fa fa-google-plus"></i></a>
                      <a href="https://www.linkedin.com/in/bruceisyoung" target="_blank"><i className="fa fa-linkedin"></i></a> 
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