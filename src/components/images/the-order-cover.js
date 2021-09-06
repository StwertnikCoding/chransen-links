import React, { Component } from 'react';

export default class TheOrderCover extends Component {
  render() {
    return (
      <div className="cover-wrapper">
        <img className="cover" src={require('../images/covers/the-order.png')}></img>
      </div>
    );
  }
}