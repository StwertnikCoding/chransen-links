import React, { Component } from 'react';

export default class NewReleaseCover extends Component {
  render() {
    return (
      <div className="cover-wrapper">
        <img className="cover" src={require('../images/logo/chransen-transparent.png')}></img>
      </div>
    );
  }
}