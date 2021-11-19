import React, { Component } from 'react';

import HeadingContainer from '../../../containers/heading-container';
import GhostWobbleVipButtonContainer from '../../../containers/ghost-wobble-vip-btn-container';
import IconContainer from '../../../containers/icon-container';

export default class SpaceCreamFullAlbum extends Component {
  render() {
    return (
        <div className="new-releases-wrapper">
        <div className='heading-container-wrapper'>
            <HeadingContainer />
        </div>

        <div className="link-container-wrapper">
            <GhostWobbleVipButtonContainer />
        </div>

        <div className="icon-container-wrapper">
            <IconContainer />
        </div>
    </div>
    );
  }
}