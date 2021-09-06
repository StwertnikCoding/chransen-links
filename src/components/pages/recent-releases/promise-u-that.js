import React, { Component } from 'react';

import HeadingContainer from '../../containers/heading-container';
import PromiseButtonContainer from '../../containers/promise-button-container';
import IconContainer from '../../containers/icon-container';
export default class PromiseUThat extends Component {
  render() {
    return (
        <div className="new-releases-wrapper">
        <div className='heading-container-wrapper'>
            <HeadingContainer />
        </div>

        <div className="link-container-wrapper">
            <PromiseButtonContainer />
        </div>

        <div className="icon-container-wrapper">
            <IconContainer />
        </div>
    </div>
    );
  }
}