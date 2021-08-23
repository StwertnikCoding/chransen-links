import React, { Component } from 'react';

export default class NuhUhGif extends Component {
  render() {
    return (
      <div className="gif-wrapper">
        <img className="gif" src={require('../images/nuh-uh/nuh-uh.gif')}></img>
      </div>
    );
  }
}