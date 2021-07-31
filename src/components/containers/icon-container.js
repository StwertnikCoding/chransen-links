import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class IconContainer extends Component {
  render() {
    return (
      <div className="icon-wrapper">
        
        <div className="instagram-icon-wrapper">
            <a 
            className="hc-instagram-icon"
            href="https://www.instagram.com/hischransen/">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
        </div>

        <div className="twitter-icon-wrapper">
            <a
            className="hc-twitter-icon"
            href="https://twitter.com/chransenhis?lang=en">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
        </div>
      </div>
    );
  }
}