import React, { Component } from 'react';

export default class KnockKnockCover extends Component {
  render() {
    return (
      <div className="logo-wrapper">
        <img className="logo" src={require('../images/covers/knock-knock.png')}></img>
      </div>
    );
  }
}