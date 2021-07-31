import React, { Component } from 'react';


import HeadingContainer from '../containers/heading-container';
import BtnContainer from '../containers/btn-container';
import IconContainer from '../containers/icon-container';

export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <div className='heading-container-wrapper'>
          <HeadingContainer />
        </div>

        <div className="btn-container-wrapper">
          <BtnContainer />
        </div>

        <div className="icon-container-wrapper">
          <IconContainer />
        </div>
      </div>
    );
  }
}
