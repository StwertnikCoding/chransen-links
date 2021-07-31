import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HeadingContainer from '../containers/heading-container';
import LinkContainer from '../containers/link-container'
import IconContainer from '../containers/icon-container';

export default class NewRelease extends Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <div className="heading-container-wrapper">
            <HeadingContainer />
        </div>
        <div className="link-container-wrapper">
            <LinkContainer />
        </div>

        <div className="icon-container-wrapper">
            <IconContainer />
        </div>
      </div>
    );
  }
}