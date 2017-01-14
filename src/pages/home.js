import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
	    <article className='content introduction noscroll' id='chapterhome'>
        <div className='inner'>
        	<h2>
        		<span>HELLO, I'M</span>
        		<br/>
        		SHENG YANG
        	</h2>
        	<span className='title'>Full-Stack Software Engineer</span>
      	</div>
        <div id="owl-demo" className="owl-carousel">
          <div className="item"><img src="../src/assets/images/profile1.jpg" alt="" /></div>
          <div className="item"><img src="../src/assets/images/profile2.jpg" alt="" /></div>
          <div className="item"><img src="../src/assets/images/profile3.jpg" alt="" /></div>
        </div>
      	<img/>
	    </article>

    );
  }
};