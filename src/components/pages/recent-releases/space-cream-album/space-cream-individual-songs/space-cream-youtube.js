import React, { Component } from 'react';

import HeadingContainer from '../../../../containers/heading-container';
import SpaceCreamYoutubeButtonContainer from '../../../../containers/space-cream-album-containers/space-cream-individual-tracks-containers/space-cream-soundcloud-button-container';
import IconContainer from '../../../../containers/icon-container';

export default class SpaceCreamYoutube extends Component {
  render() {
    return (
        <div className="new-releases-wrapper">
        <div className='heading-container-wrapper'>
            <HeadingContainer />
        </div>

        <div className="link-container-wrapper">
            <SpaceCreamYoutubeButtonContainer />
        </div>

        <div className="icon-container-wrapper">
            <IconContainer />
        </div>
    </div>
    );
  }
}