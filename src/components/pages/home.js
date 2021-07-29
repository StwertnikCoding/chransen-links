import React, { Component } from 'react';


import HeadingContainer from '../containers/heading-container';
import LinkContainer from '../containers/link-container';


export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <div className='heading-container-wrapper'>
          <HeadingContainer />
        </div>

        <div className="link-container-wrapper">
          <LinkContainer />
        </div>
      </div>
    );
  }
}
