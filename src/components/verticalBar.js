import React, { Component } from 'react';

export default class VerticalBar extends Component {
  render() {
    return (
      <div className='jspVerticalBar'>
        <div className='jspCap jspCapTop'></div>
        <div className='jspTrack' style={{height: '246px'}}>
          <div className='jspDrag' style={{height: '169px'}}>
            <div className='jspDragTop'></div>
            <div className='jspDragBottom'></div>
          </div>
        </div>
        <div className='jspCap jspCapBottom'></div>
      </div>
    );
  }
}