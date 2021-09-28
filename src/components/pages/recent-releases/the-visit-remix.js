import React, { Component } from 'react';

import HeadingContainer from '../../containers/heading-container';
import TheVisitButtonContainer from '../../containers/the-visit-button-container';
import IconContainer from '../../containers/icon-container';

export default class TheVisit extends Component {
  render() {
    return (
        <div className="new-releases-wrapper">
        <div className='heading-container-wrapper'>
            <HeadingContainer />
        </div>

        <div className="link-container-wrapper">
            <TheVisitButtonContainer />
        </div>

        <div className="icon-container-wrapper">
            <IconContainer />
        </div>
    </div>
    );
  }
}