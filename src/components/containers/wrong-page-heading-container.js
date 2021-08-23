import React, { Component } from 'react';
import ChransenLogo from '../images/chransen-logo';



export default class WrongPageHeadingContainer extends Component {
  render() {
    return (
      <div className="wrong-page-heading-container">
        <div className="wrong-page-heading-wrapper"> 
           <ChransenLogo />

           <h2 className="wrong-page-subtitle">404</h2>
        </div>
      </div>
    );
  }
}