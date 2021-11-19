import React, { Component } from 'react';

import HeadingContainer from '../../../containers/heading-container';
import SpaceCreamIndividualTracksButtonContainer from '../../../containers/space-cream-album-containers/space-cream-individual-tracks-btn-container';
import IconContainer from '../../../containers/icon-container';

export default class SpaceCreamIndividualTracks extends Component {
  render() {
    return (
        <div className="new-releases-wrapper">
        <div className='heading-container-wrapper'>
            <HeadingContainer />
        </div>

        <div className="link-container-wrapper">
            <SpaceCreamIndividualTracksButtonContainer />
        </div>

        <div className="icon-container-wrapper">
            <IconContainer />
        </div>
    </div>
    );
  }
}