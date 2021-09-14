import React, { Component } from 'react';

import HeadingContainer from '../../containers/heading-container';
import KnockKnockButtonContainer from '../../containers/knock-knock-button-container';
import IconContainer from '../../containers/icon-container';

export default class ComingSoon extends Component {
  render() {
    return (
        <div className="new-releases-wrapper">
        <div className='heading-container-wrapper'>
            <HeadingContainer />
        </div>

        <div className="link-container-wrapper">
            <KnockKnockButtonContainer />
        </div>

        <div className="icon-container-wrapper">
            <IconContainer />
        </div>
    </div>
    );
  }
}