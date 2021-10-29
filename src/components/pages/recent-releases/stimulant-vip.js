import React, { Component } from 'react';

import HeadingContainer from '../../containers/heading-container';
import ComingSoonButtonContainer from '../../containers/coming-soon-button-container';
import IconContainer from '../../containers/icon-container';

export default class StimulantVip extends Component {
  render() {
    return (
        <div className="new-releases-wrapper">
        <div className='heading-container-wrapper'>
            <HeadingContainer />
        </div>

        <div className="link-container-wrapper">
            <ComingSoonButtonContainer />
        </div>

        <div className="icon-container-wrapper">
            <IconContainer />
        </div>
    </div>
    );
  }
}