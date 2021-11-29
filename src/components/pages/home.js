import React, { Component } from 'react';


import HeadingContainer from '../containers/heading-container';
import HomepageButtonContainer from '../containers/homepage-button-container';
import IconContainer from '../containers/icon-container';

export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <div className='heading-container-wrapper'>
          <HeadingContainer />
        </div>

        <div className="btn-container-wrapper">
          <HomepageButtonContainer />
        </div>

      </div>
    );
  }
}
