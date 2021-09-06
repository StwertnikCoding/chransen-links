import React, { Component } from 'react';

import HeadingContainer from '../containers/heading-container';
import LinkContainer from '../containers/link-container';
import NewReleaseButtonContainer from '../containers/new-release-button-container';
import IconContainer from '../containers/icon-container';

export default class NewReleases extends Component {
  render() {
    return (
        <div className="new-releases-wrapper">
            <div className='heading-container-wrapper'>
                <HeadingContainer />
            </div>

            <div className="link-container-wrapper">
                <NewReleaseButtonContainer />
            </div>

            <div className="icon-container-wrapper">
                <IconContainer />
            </div>
      </div>
    );
  }
}