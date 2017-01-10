import React, { Component } from 'react';
import ReactPlayer from 'react-player';

//http://pic.chinadaily.com.cn/2016-01/11/content_23019739_7.htm
export default class Projects extends Component {
  render() {
    return (
      <article className='content portfolio white-bg' id='chapterprojects'>
        <div className='inner'>
          <h2>Projects</h2>
          <div className='title-divider'></div>
          <div >
            <ReactPlayer url='https://youtu.be/Xs4z3ZtFDxg' controls={true}/>
            <h3 className='projectTitle'>MadSweepers</h3>
            <p className='brief'>real-time multiplayer game combining Contra and Minesweepers, utilizing React / Redux as Front-end framework, node / express as back-end framework and socket.io as communication protocol</p>
            <ul className='bulletPoints'>
              <li><span>Developed React/Redux based client-side game states manager and middleware for handling states updates and concurrent multi user web-socket communications </span></li>
              <li>
                <span>Designed the structure of the app for better control on user interaction</span>
                <ul>
                  <li>defining back-end as the game states hub, where the latest game states are calculated after the player’s operations are sent to server</li>
                  <li>the front-end received game states updates through socket from server and rerender game views instead of generating new local states directly</li>
                </ul>
              </li>
              <li><span>Used object-oriented design to optimize the back-end server, establishing structured classes for gameManager, board and players with comprehensive methods to manage game states</span></li>
              <li><span>Redistributed workload of game states calculation to client side to achieve lighter socket traffic and faster game response</span></li>
              <li><span>Created socket.io based modules to synchronize changes of game states resulted from real-time user interactions on multiple clients’ terminals</span></li>
              <li><span>Deployed application services through Docker containers and leveraged AWS ECS clusters and EC2 load balancers to enhance performance</span></li>
              <li><span>Implemented unit testing and integration testing by mocha, chai, sinon, enzyme</span></li>
            </ul>
          </div>
          <div >
            <h3 className='projectTitle'>Jamz</h3>
            <p className='brief'>An IOS app designed to help users to setup and accomplish goals and cultivate accountability</p>
            <ul className='bulletPoints'>
              <li><span>Built modular and performant user interface with React Native and Exponent</span></li>
              <li><span>Utilized Node, Express and MongoDB to construct back-end to store and serve user data, including authentication information, personal goals and check-in history
</span></li>
              <li><span>Constructed APIs on server side and enabled the communication between front-end and back-end through RESTful requests</span></li>
              <li><span>Automatically updated and deployed server, using heroku and CircleCI</span></li>
              <li><span>Increased unit and integration test coverage using Mocha, Chai</span></li>
            </ul>
          </div>


          <div >
            <h3 className='projectTitle'>Meal.Next</h3>
            <p className='brief'>All-in-one IOS app to find recipes, build grocery list, check nutrition info and calories consumption</p>
            <ul className='bulletPoints'>
              <li><span>Used NativeBase to polish the user interface for rendering native IOS app views</span></li>
              <li><span>Integrated local storage to persist user profile information and preferences between sessions</span></li>
              <li><span>Enabled seamless transitions between Front-end views with Exponent navigation bar</span></li>
              <li><span>Employed various React-Native components to implement interactive and visual user features, including drawer, swipeout, keyboardAvoidingView, search bar, loading spinner and chart
</span></li>
            </ul>
          </div>


        </div>
      </article>
    );
  }
};