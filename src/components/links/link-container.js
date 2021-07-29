import React, { Component } from 'react';
import ChransenLogo from '../images/chransen-logo';

import BtnLinks from './buttons-links';

export default class LinkContainer extends Component {
  render() {
    return (
      <div className="link-container">
        <div className="heading-wrapper"> 
           <ChransenLogo />
            <div className="main-heading">
                <h1>His Chransen's Music</h1>
            </div>
            <div className='subtitle'>
                <h3>Click a link to visit me there</h3>
            </div>
        </div>
        <BtnLinks />
      </div>
    );
  }
}