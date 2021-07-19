import React, { Component } from 'react';

import BtnLinks from './buttons-links';

export default class LinkContainer extends Component {
  render() {
    return (
      <div className="link-container">
        <div className="heading-wrapper"> 
            <h1>His Chransen's Music :</h1>
            <h3>Click a link to visit me there</h3>
        </div>
        <BtnLinks />
      </div>
    );
  }
}