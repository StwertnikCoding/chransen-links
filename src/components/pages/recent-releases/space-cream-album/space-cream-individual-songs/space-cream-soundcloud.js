import React, { Component } from 'react';

import HeadingContainer from '../../../../containers/heading-container';
import SpaceCreamSoundcloudButtonContainer from '../../../../containers/space-cream-album-containers/space-cream-individual-tracks-containers/space-cream-soundcloud-button-container';
import IconContainer from '../../../../containers/icon-container';

export default class SpaceCreamSoundcloud extends Component {
  render() {
    return (
        <div className="new-releases-wrapper">
        <div className='heading-container-wrapper'>
            <HeadingContainer />
        </div>

        <div className="link-container-wrapper">
            <SpaceCreamSoundcloudButtonContainer />
        </div>

        <div className="icon-container-wrapper">
            <IconContainer />
        </div>
    </div>
    );
  }
}