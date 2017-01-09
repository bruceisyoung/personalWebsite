import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <article className='content portfolio white-bg' id='chapterprojects'>
        <div className='inner'>
          <h2>Projects</h2>
          <div className='title-divider'></div>
          <div >
            <video />
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



        </div>
      </article>
    );
  }
};