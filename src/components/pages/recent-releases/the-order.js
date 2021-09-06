import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HeadingContainer from '../../containers/heading-container';
import TheOrderButtonContainer from '../../containers/the-order-button-container';
import IconContainer from '../../containers/icon-container';

export default class TheOrder extends Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <div className="heading-container-wrapper">
            <HeadingContainer />
        </div>
        <div className="link-container-wrapper">
            <TheOrderButtonContainer />
        </div>

        <div className="icon-container-wrapper">
            <IconContainer />
        </div>
      </div>
    );
  }
}