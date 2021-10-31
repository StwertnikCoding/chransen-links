import React, { Component } from 'react';

import HeadingContainer from '../../containers/heading-container';
import SpaceCreamAlbumButtonContainer from '../../containers/space-cream-album-btn-container';
import IconContainer from '../../containers/icon-container';

export default class SpaceCreamAlbum extends Component {
  render() {
    return (
        <div className="new-releases-wrapper">
        <div className='heading-container-wrapper'>
            <HeadingContainer />
        </div>

        <div className="link-container-wrapper">
            <SpaceCreamAlbumButtonContainer />
        </div>

        <div className="icon-container-wrapper">
            <IconContainer />
        </div>
    </div>
    );
  }
}