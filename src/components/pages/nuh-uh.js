import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import WrongPageHeadingContainer from '../containers/wrong-page-heading-container';
import NuhUhGif from '../images/nuh-uh-gif';
import IconContainer from '../containers/icon-container';

export default class NuhUh extends Component {
  render() {
    return (
      <div className="nuh-uh-wrapper">
          <div className="nuh-uh-heading-container">
            <WrongPageHeadingContainer />  
          </div>
          <div className="center-nuh-uh-wrapper">
            <div className="nuh-uh-gif-wrapper">
              <NuhUhGif />
            </div>

            <div className="nuh-uh-link-wrapper">
              <Link className="nuh-uh-link" to="/">
                  Return to Homepage
              </Link>
            </div>
          </div>
          <div className="icon-container-wrapper">
            <IconContainer />
          </div>
      </div>
    );
  }
}