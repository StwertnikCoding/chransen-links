import React, { Component } from 'react';
import ChransenLogo from '../images/chransen-logo';



export default class HeadingContainer extends Component {
  render() {
    return (
      <div className="heading-container">
        <div className="heading-wrapper"> 
           <ChransenLogo />
        </div>
      </div>
    );
  }
}