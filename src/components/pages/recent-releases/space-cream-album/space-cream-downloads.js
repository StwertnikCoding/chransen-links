import React, { Component } from 'react';

import HeadingContainer from '../../../containers/heading-container';
import SpaceCreamDownloadsButtonContainer from '../../../containers/space-cream-album-containers/space-cream-downloads-button-container';
import IconContainer from '../../../containers/icon-container';

export default class SpaceCreamDownloads extends Component {
  render() {
    return (
        <div className="new-releases-wrapper">
        <div className='heading-container-wrapper'>
            <HeadingContainer />
        </div>

        <div className="link-container-wrapper">
            <SpaceCreamDownloadsButtonContainer />
        </div>

        <div className="icon-container-wrapper">
            <IconContainer />
        </div>
    </div>
    );
  }
}