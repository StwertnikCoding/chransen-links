import React, { Component } from 'react';

import HeadingContainer from '../../../containers/heading-container';
import SpaceCreamFullAlbumButtonContainer from '../../../containers/space-cream-album-containers/space-cream-full-album-button-container';
import IconContainer from '../../../containers/icon-container';

export default class SpaceCreamFullAlbum extends Component {
  render() {
    return (
        <div className="new-releases-wrapper">
        <div className='heading-container-wrapper'>
            <HeadingContainer />
        </div>

        <div className="link-container-wrapper">
            <SpaceCreamFullAlbumButtonContainer />
        </div>

        <div className="icon-container-wrapper">
            <IconContainer />
        </div>
    </div>
    );
  }
}