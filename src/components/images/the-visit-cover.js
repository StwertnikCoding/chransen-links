import React, { Component } from 'react';

export default class TheVisitCover extends Component {
  render() {
    return (
      <div className="logo-wrapper">
        <img className="logo" src={require('../images/covers/the-visit-cover.jpg')}></img>
      </div>
    );
  }
}