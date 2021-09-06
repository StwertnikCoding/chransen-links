import React, { Component } from 'react';


export default class PromiseCover extends Component {    
  render() {
    return (
        <div className="cover-wrapper">
            <img className="cover" src={require('../images/covers/promise-u-that.png')}></img>
        </div>
    );
  }
}