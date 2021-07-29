import React, { Component } from 'react';
import ChransenLogo from '../images/chransen-logo';

import BtnLinks from './buttons-links';

export default class LinkContainer extends Component {
  render() {
    return (
      <div className="link-container">
        <div className="heading-wrapper"> 
           <ChransenLogo />

           <h2 className="subtitle">Click a button</h2>
        </div>
        <BtnLinks />
      </div>
    );
  }
}