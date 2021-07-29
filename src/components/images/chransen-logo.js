import React, { Component } from 'react';

export default class ChransenLogo extends Component {
  render() {
    return (
      <div className="logo-wrapper">
        <img className="logo" src={require('../images/logo/chransen-transparent.png')}></img>
      </div>
    );
  }
}